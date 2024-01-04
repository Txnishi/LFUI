import { useEffect } from 'react';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import * as THREE from 'three';
import { GUI } from 'dat.gui';

import SceneInit from './scene';

function Login() {
    useEffect(() => {
        const test = new SceneInit('myThreeJsCanvas');
        test.initialize();
        test.animate();

        const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
        const boxMaterial = new THREE.MeshPhongMaterial({ color: 0x5f4184 });
        const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);


        // const geometry = new THREE.SphereGeometry( 15, 32, 16 );
        // const material = new THREE.MeshBasicMaterial();
        // const sphere = new THREE.Mesh( geometry, material );
        // // scene.add( sphere );

        // const al = new THREE.AmbientLight(0xffffff, 0.5);
        // test.scene.add(al);
        test.scene.add(boxMesh);


        // part 1 intiallizing the gui
        // const gui = new GUI();

        // // part 2 adding the gui to the scene
        // gui.add(boxMesh.rotation, 'x', 0, Math.PI).name('Rotation X Axis');
        // gui.add(boxMesh.rotation, 'y', 0, Math.PI).name('Rotation Y Axis');
        // gui.add(boxMesh.rotation, 'z', 0, Math.PI).name('Rotation Z Axis');
        // gui.add(boxMesh.scale, 'x', 0, 2).name('Scale X Axis');
        // gui.add(boxMesh.scale, 'y', 0, 2).name('Scale Y Axis');
        // gui.add(boxMesh.scale, 'z', 0, 2).name('Scale Z Axis');

        // part 3 updating material (color, wireframe)

        const materialParams = {
            boxMeshColor: boxMesh.material.color.getHex(),
        };
        gui.add(boxMesh.material, 'wireframe');
        gui
            .addColor(materialParams, 'boxMeshColor')
            .onChange((value) => boxMesh.material.color.set(value));


    }, []);

    return (
        <div>
            <canvas id="myThreeJsCanvas" />
        </div>
    );
}

export default Login;