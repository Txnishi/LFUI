import { useEffect, useMemo, useRef } from 'react'
import { AdditiveBlending, Vector3, SphereGeometry, MeshBasicMaterial, Mesh } from 'three';
import { useFrame, useThree, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader'

export default function NeuralNetwork() {
    const groupRef = useRef()
    const particlesRef = useRef()
    const linesGeometryRef = useRef()

    const maxParticleCount = 500
    const particleCount = 301
    const r = 10
    const rHalf = r / 2
    const maxConnections = 20
    const minDistance = 2.5
    let vertexpos = 0
    let colorpos = 0
    let numConnected = 0

    const segments = maxParticleCount * maxParticleCount
    const positions = useMemo(() => new Float32Array(segments * 3), [segments])
    const colors = useMemo(() => new Float32Array(segments * 3), [segments])

    const particlePositions = useMemo(() => new Float32Array(maxParticleCount * 3), [])

    const particlesData = useMemo(() => [], [])

    const v = useMemo(() => new Vector3(), [])


    const [color, normal, aoMap] = useLoader(TextureLoader, [

        "https://blog.olivierlarose.com/_next/image?url=%2Fmedias%2Ftutorials%2F3d-earth%2Fcolor.jpg&w=1920&q=75",

        'https://blog.olivierlarose.com/_next/image?url=%2Fmedias%2Ftutorials%2F3d-earth%2Fnormal.png&w=1920&q=75',

        'https://blog.olivierlarose.com/_next/image?url=%2Fmedias%2Ftutorials%2F3d-earth%2Focclusion.jpg&w=1920&q=75'

    ])

    // const earthTexture = useLoader(TextureLoader, 'https://ksenia-k.com/img/earth-map-colored.png');

    // useEffect(() => {
    //     if (earthTexture) {
    //         earthTexture.repeat.set(1, 1);
    //         createGlobe();
    //         createPointer();
    //         createPopupTimelines();
    //         render();
    //     }
    // }, [earthTexture]);

    useEffect(() => {

        for (let i = 0; i < maxParticleCount; i++) {
            const x = Math.random() * r - r / 2
            const y = Math.random() * r - r / 2
            const z = Math.random() * r - r / 2

            particlePositions[i * 3] = x
            particlePositions[i * 3 + 1] = y
            particlePositions[i * 3 + 2] = z

            const v = new Vector3(-1 + Math.random() * 2, -1 + Math.random() * 2, -1 + Math.random() * 2)
            particlesData.push({ velocity: v.normalize().divideScalar(50), numConnections: 0 })
        }

        particlesRef.current.setDrawRange(0, particleCount)

    })

    useFrame((_, delta) => {

        vertexpos = 0
        colorpos = 0
        numConnected = 0

        for (let i = 0; i < particleCount; i++) particlesData[i].numConnections = 0

        for (let i = 0; i < particleCount; i++) {
            const particleData = particlesData[i]

            v.set(particlePositions[i * 3], particlePositions[i * 3 + 1], particlePositions[i * 3 + 2])
                .add(particleData.velocity)
                .setLength(10)
            particlePositions[i * 3] = v.x
            particlePositions[i * 3 + 1] = v.y
            particlePositions[i * 3 + 2] = v.z

            if (particlePositions[i * 3 + 1] < -rHalf || particlePositions[i * 3 + 1] > rHalf) particleData.velocity.y = -particleData.velocity.y

            if (particlePositions[i * 3] < -rHalf || particlePositions[i * 3] > rHalf) particleData.velocity.x = -particleData.velocity.x

            if (particlePositions[i * 3 + 2] < -rHalf || particlePositions[i * 3 + 2] > rHalf) particleData.velocity.z = -particleData.velocity.z

            if (particleData.numConnections >= maxConnections) continue

            for (let j = i + 1; j < particleCount; j++) {
                const particleDataB = particlesData[j]
                if (particleDataB.numConnections >= maxConnections) continue

                const dx = particlePositions[i * 3] - particlePositions[j * 3]
                const dy = particlePositions[i * 3 + 1] - particlePositions[j * 3 + 1]
                const dz = particlePositions[i * 3 + 2] - particlePositions[j * 3 + 2]
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)

                if (dist < minDistance) {
                    particleData.numConnections++
                    particleDataB.numConnections++

                    const alpha = 1.0 - dist / minDistance

                    positions[vertexpos++] = particlePositions[i * 3]
                    positions[vertexpos++] = particlePositions[i * 3 + 1]
                    positions[vertexpos++] = particlePositions[i * 3 + 2]

                    positions[vertexpos++] = particlePositions[j * 3]
                    positions[vertexpos++] = particlePositions[j * 3 + 1]
                    positions[vertexpos++] = particlePositions[j * 3 + 2]

                    colors[colorpos++] = alpha
                    colors[colorpos++] = alpha
                    colors[colorpos++] = alpha

                    colors[colorpos++] = alpha
                    colors[colorpos++] = alpha
                    colors[colorpos++] = alpha

                    numConnected++
                }
            }
        }

        linesGeometryRef.current.setDrawRange(0, numConnected * 2)
        linesGeometryRef.current.attributes.position.needsUpdate = true
        linesGeometryRef.current.attributes.color.needsUpdate = true

        particlesRef.current.attributes.position.needsUpdate = true

        groupRef.current.rotation.y += delta / 8
    })

    return (
        <>
            <ambientLight intensity={0.1} />
            <directionalLight intensity={3.5} position={[18, 19, -1.25]} />
            <group ref={groupRef} dispose={null}>
                {/* <ambientLight intensity={0.1} />
            <directionalLight intensity={3.5} position={[3, 4.5, -3.25]} />
            <mesh scale={7}>
                <sphereGeometry args={[1, 64, 64]} />
                <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
            </mesh> */}
                <mesh scale={7} rotation={[0, 0, 0]}>  <sphereGeometry args={[1, 64, 64]} />
                    <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
                </mesh>

                <points>
                    <bufferGeometry ref={particlesRef}>
                        <bufferAttribute attach="attributes-position" count={particleCount} array={particlePositions} itemSize={3} />
                    </bufferGeometry>
                    <pointsMaterial color={'white'} size={3} blending={AdditiveBlending} transparent={true} sizeAttenuation={false} />
                </points>
                <lineSegments>
                    <bufferGeometry ref={linesGeometryRef}>
                        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
                        <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} />
                    </bufferGeometry>
                    <lineBasicMaterial vertexColors={true} blending={AdditiveBlending} transparent={true} />
                </lineSegments>
            </group>
        </>
    )
}