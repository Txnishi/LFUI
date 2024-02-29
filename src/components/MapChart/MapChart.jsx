import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import gsap from 'gsap';

const MapChart = () => {
    const containerRef = useRef(null);
    const canvas3DRef = useRef(null);
    const canvas2DRef = useRef(null);
    const popupRef = useRef(null);

    let renderer, scene, camera, rayCaster, controls, group;
    let coordinates2D = [0, 0];

    let overlayCtx, pointerPos, clock, mouse, pointer, globe, globeMesh;
    let popupVisible;
    let earthTexture, mapMaterial;
    let popupOpenTl, popupCloseTl;
    let dragged = false;

    useEffect(() => {
        initScene();
        window.addEventListener('resize', updateSize);
        return () => {
            window.removeEventListener('resize', updateSize);
        };
    }, []);

    function initScene() {
        renderer = new THREE.WebGLRenderer({ canvas: canvas3DRef.current, alpha: true });
        renderer.setPixelRatio(3);

        scene = new THREE.Scene();
        camera = new THREE.OrthographicCamera(-1.1, 1.1, 1.1, -1.1, 0, 3);
        camera.position.z = 1.1;

        rayCaster = new THREE.Raycaster();
        rayCaster.far = 1.15;
        mouse = new THREE.Vector2(-1, -1);
        clock = new THREE.Clock();

        createOrbitControls();

        popupVisible = false;

        new THREE.TextureLoader().load(
            'https://ksenia-k.com/img/earth-map-colored.png',
            (mapTex) => {
                earthTexture = mapTex;
                earthTexture.repeat.set(1, 1);
                createGlobe();
                createPointer();
                createPopupTimelines();
                addCanvasEvents();
                updateSize();
                render();
            }
        );
    }

    function createOrbitControls() {
        controls = new OrbitControls(camera, canvas3DRef.current);
        controls.enablePan = false;
        controls.enableZoom = false;
        controls.enableDamping = true;
        controls.minPolarAngle = 0.4 * Math.PI;
        controls.maxPolarAngle = 0.4 * Math.PI;
        controls.autoRotate = true;

        let timestamp;
        controls.addEventListener('start', () => {
            timestamp = Date.now();
        });
        controls.addEventListener('end', () => {
            dragged = Date.now() - timestamp > 600;
        });
    }

    function createGlobe() {
        const globeGeometry = new THREE.IcosahedronGeometry(0.8, 22);
        mapMaterial = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
            uniforms: {
                u_map_tex: { type: 't', value: earthTexture },
                u_dot_size: { type: 'f', value: 0 },
                u_pointer: { type: 'v3', value: new THREE.Vector3(0, 0, 1) },
                u_time_since_click: { value: 0 },
            },
            alphaTest: false,
            transparent: true,
        });

        globe = new THREE.Points(globeGeometry, mapMaterial);
        scene.add(globe);

        globeMesh = new THREE.Mesh(
            globeGeometry,
            new THREE.MeshBasicMaterial({
                color: 0xd3eef4,
                transparent: true,
                opacity: 0.1,
            })
        );
        scene.add(globeMesh);
    }


    function createPointer() {
        const geometry = new THREE.SphereGeometry(0.04, 16, 16);
        const material = new THREE.MeshBasicMaterial({
            color: 0x00000,
            transparent: true,
            opacity: 0,
        });
        pointer = new THREE.Mesh(geometry, material);
        scene.add(pointer);
    }

    function updateOverlayGraphic() {
        let activePointPosition = pointer.position.clone();
        activePointPosition.applyMatrix4(globe.matrixWorld);
        const activePointPositionProjected = activePointPosition.clone();
        activePointPositionProjected.project(camera);
        coordinates2D[0] = (activePointPositionProjected.x + 1) * containerRef.current.offsetWidth * 0.5;
        coordinates2D[1] = (1 - activePointPositionProjected.y) * containerRef.current.offsetHeight * 0.5;

        const matrixWorldInverse = controls.object.matrixWorldInverse;
        activePointPosition.applyMatrix4(matrixWorldInverse);

        if (activePointPosition.z > -1) {
            if (!popupVisible) {
                popupVisible = true;
                showPopupAnimation(false);
            }

            let popupX = coordinates2D[0];
            popupX -= activePointPositionProjected.x * containerRef.current.offsetWidth * 0.3;

            let popupY = coordinates2D[1];
            const upDown = activePointPositionProjected.y > 0.6;
            popupY += upDown ? 20 : -20;

            gsap.set(popupRef.current, {
                x: popupX,
                y: popupY,
                xPercent: -35,
                yPercent: upDown ? 0 : -100,
            });

            popupY += upDown ? -5 : 5;
            const curveMidX = popupX + activePointPositionProjected.x * 100;
            const curveMidY = popupY + (upDown ? -0.5 : 0.1) * coordinates2D[1];

            drawPopupConnector(coordinates2D[0], coordinates2D[1], curveMidX, curveMidY, popupX, popupY);
        } else {
            if (popupVisible) {
                popupOpenTl.pause(0);
                popupCloseTl.play(0);
            }
            popupVisible = false;
        }
    }

    function addCanvasEvents() {
        containerRef.current.addEventListener('mousemove', (e) => {
            updateMousePosition(e.clientX, e.clientY);
        });

        containerRef.current.addEventListener('click', (e) => {
            if (!dragged) {
                updateMousePosition(
                    e.targetTouches ? e.targetTouches[0].pageX : e.clientX,
                    e.targetTouches ? e.targetTouches[0].pageY : e.clientY
                );

                const res = checkIntersects();
                if (res.length) {
                    pointerPos = res[0].face.normal.clone();
                    pointer.position.set(res[0].face.normal.x, res[0].face.normal.y, res[0].face.normal.z);
                    mapMaterial.uniforms.u_pointer.value = res[0].face.normal;
                    popupRef.current.innerHTML = cartesianToLatLong();
                    showPopupAnimation(true);
                    clock.start();
                }
            }
        });

        function updateMousePosition(eX, eY) {
            mouse.x = (eX - containerRef.current.offsetLeft) / containerRef.current.offsetWidth * 2 - 1;
            mouse.y = -((eY - containerRef.current.offsetTop) / containerRef.current.offsetHeight) * 2 + 1;
        }
    }

    function checkIntersects() {
        rayCaster.setFromCamera(mouse, camera);
        const intersects = rayCaster.intersectObject(globeMesh);
        if (intersects.length) {
            document.body.style.cursor = 'pointer';
        } else {
            document.body.style.cursor = 'auto';
        }
        return intersects;
    }

    function render() {
        mapMaterial.uniforms.u_time_since_click.value = clock.getElapsedTime();
        checkIntersects();
        if (pointer) {
            updateOverlayGraphic();
        }
        controls.update();
        renderer.render(scene, camera);
        requestAnimationFrame(render);
    }

    function updateSize() {
        const minSide = 1 * Math.min(window.innerWidth, window.innerHeight);
        containerRef.current.style.width = minSide + 'px';
        containerRef.current.style.height = minSide + 'px';
        renderer.setSize(minSide, minSide);
        canvas2DRef.current.width = canvas2DRef.current.height = minSide;
        mapMaterial.uniforms.u_dot_size.value = 0.04 * minSide;
    }

    function cartesianToLatLong() {
        const pos = pointer.position;
        const lat = 90 - (Math.acos(pos.y) * 180) / Math.PI;
        const lng = ((270 + Math.atan2(pos.x, pos.z) * 180) / Math.PI) % 360 - 180;
        return `${formatCoordinate(lat, 'N', 'S')},&nbsp;${formatCoordinate(lng, 'E', 'W')}`;
    }

    function formatCoordinate(coordinate, positiveDirection, negativeDirection) {
        const direction = coordinate >= 0 ? positiveDirection : negativeDirection;
        return `${Math.abs(coordinate).toFixed(4)}°&nbsp${direction}`;
    }

    function createPopupTimelines() {
        popupOpenTl = gsap.timeline({
            paused: true,
        })
            .to(pointer.material, {
                duration: 0.2,
                opacity: 1,
            }, 0)
            .fromTo(
                canvas2DRef.current,
                {
                    opacity: 0,
                },
                {
                    duration: 0.3,
                    opacity: 1,
                },
                0.15
            )
            .fromTo(
                popupRef.current,
                {
                    opacity: 0,
                    scale: 0.9,
                    transformOrigin: 'center bottom',
                },
                {
                    duration: 0.1,
                    opacity: 1,
                    scale: 1,
                },
                0.15 + 0.1
            );

        popupCloseTl = gsap.timeline({
            paused: true,
        })
            .to(pointer.material, {
                duration: 0.3,
                opacity: 0.2,
            }, 0)
            .to(
                canvas2DRef.current,
                {
                    duration: 0.3,
                    opacity: 0,
                },
                0
            )
            .to(
                popupRef.current,
                {
                    duration: 0.3,
                    opacity: 0,
                    scale: 0.9,
                    transformOrigin: 'center bottom',
                },
                0
            );
    }

    function showPopupAnimation(lifted) {
        if (lifted) {
            let positionLifted = pointer.position.clone();
            positionLifted.multiplyScalar(1.3);
            gsap.from(pointer.position, {
                duration: 0.25,
                x: positionLifted.x,
                y: positionLifted.y,
                z: positionLifted.z,
                ease: 'power3.out',
            });
        }
        popupCloseTl.pause(0);
        popupOpenTl.play(0);
    }

    function drawPopupConnector(startX, startY, midX, midY, endX, endY) {
        overlayCtx.strokeStyle = '#000000';
        overlayCtx.lineWidth = 3;
        overlayCtx.lineCap = 'round';
        overlayCtx.clearRect(0, 0, containerRef.current.offsetWidth, containerRef.current.offsetHeight);
        overlayCtx.beginPath();
        overlayCtx.moveTo(startX, startY);
        overlayCtx.quadraticCurveTo(midX, midY, endX, endY);
        overlayCtx.stroke();
    }

    return (
        <div style={{ transform: 'translateX(0%)' }}>
            <div className="globe-wrapper" ref={containerRef}>
                <canvas id="globe-3d" ref={canvas3DRef}></canvas>
                <canvas id="globe-2d-overlay" ref={canvas2DRef}></canvas>
                <div className="globe-popup" ref={popupRef}></div>
            </div>
        </div>
    );
};

const vertexShader = `
uniform sampler2D u_map_tex;
uniform float u_dot_size;
uniform float u_time_since_click;
uniform vec3 u_pointer;

#define PI 3.14159265359

varying float vOpacity;
varying vec2 vUv;

void main() {
    vUv = uv;

    // mask with world map
    float visibility = step(.2, texture2D(u_map_tex, uv).r);
    gl_PointSize = visibility * u_dot_size;

    // make back dots semi-transparent
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vOpacity = (1. / length(mvPosition.xyz) - .7);
    vOpacity = clamp(vOpacity, .03, 1.);

    // Update gl_Position without ripple effect
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

`;

const fragmentShader = `
uniform sampler2D u_map_tex;

varying float vOpacity;
varying vec2 vUv;

void main() {
    vec3 color = texture2D(u_map_tex, vUv).rgb;
    color -= .2 * length(gl_PointCoord.xy - vec2(.5));
    float dot = 1. - smoothstep(.38, .4, length(gl_PointCoord.xy - vec2(.5)));
    if (dot < 0.5) discard;
    gl_FragColor = vec4(color, dot * vOpacity);
}
`;

export default MapChart;








// import React, { useEffect } from 'react';
// import * as am4core from "@amcharts/amcharts4/core";
// import * as am4maps from '@amcharts/amcharts4/maps';
// import am4themes_animated from '@amcharts/amcharts4/themes/animated';
// import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

// const MapChart = () => {
//     useEffect(() => {
//         // Themes
//         am4core.useTheme(am4themes_animated);

//         // Create chart instance
//         const chart = am4core.create('chartdiv', am4maps.MapChart);

//         chart.logo.disabled = true;

//         // Set map definition
//         chart.geodata = am4geodata_worldLow;

//         // Set projection
//         chart.projection = new am4maps.projections.Orthographic();
//         chart.panBehavior = 'rotateLongLat';
//         chart.deltaLatitude = -15;
//         chart.padding(20, 20, 20, 20);

//         // Create map polygon series
//         const polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

//         // Make map load polygon (like country names) data from GeoJSON
//         polygonSeries.useGeodata = true;

//         // Configure series
//         const polygonTemplate = polygonSeries.mapPolygons.template;
//         // polygonTemplate.tooltipText = '{name}';
//         polygonTemplate.fill = am4core.color('#FF6633');
//         polygonTemplate.stroke = am4core.color('#000000');
//         polygonTemplate.strokeWidth = 0.5;
//         polygonTemplate.urlTarget = '_blank';

//         const graticuleSeries = chart.series.push(new am4maps.GraticuleSeries());
//         graticuleSeries.mapLines.template.line.stroke = am4core.color('#ffffff');
//         graticuleSeries.mapLines.template.line.strokeOpacity = 0.08;
//         graticuleSeries.fitExtent = false;

//         chart.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 0.7;
//         chart.backgroundSeries.mapPolygons.template.polygon.fill = am4core.color('#000');

//         // Create hover state and set alternative fill color
//         const hs = polygonTemplate.states.create('hover');
//         hs.properties.fill = chart.colors.getIndex(0).brighten(-0.5);

//         let animation;
//         setTimeout(() => {
//             animation = chart.animate({ property: 'deltaLongitude', to: 100000 }, 20000000);
//         }, 3000);

//         // Clean up function
//         return () => {
//             if (chart) {
//                 chart.dispose();
//             }
//         };
//     }, []); // Empty dependency array to ensure effect runs only once

//     return (
//         <div id="chart-container" style={{ position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)', width: '50%', height: '70vh' }}>
//             <div id="chartdiv" style={{ width: '100%', height: '100%' }}></div>
//         </div>
//     );
// };

// export default MapChart
