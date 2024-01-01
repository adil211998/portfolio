import { OrbitControls, Preload } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { TextureLoader, AdditiveBlending } from 'three'

const Earth = () => {

    const EarthImg1 = useLoader(TextureLoader, 'texture/00_earthmap1k.jpg')
    const EarthLightImg = useLoader(TextureLoader, 'texture/03_earthlights1k.jpg')
    const EarthCloudImg = useLoader(TextureLoader, 'texture/05_earthcloudmaptrans.jpg')
    const detail = 12
    return (
        <group>
            <mesh>
                {/* <hemisphereLight color={"yellow"} intensity={1} /> */}
                <icosahedronGeometry args={[1,detail]} />
                <meshPhongMaterial map={EarthImg1} />
            </mesh>
            <mesh>
                <icosahedronGeometry args={[1,detail]} />
                <meshBasicMaterial map={EarthLightImg} blending={AdditiveBlending} />
            </mesh>

            {/* Clouds Mesh */}
            <mesh scale={1.003}>
                <icosahedronGeometry args={[1,detail]} />
                <meshStandardMaterial map={EarthCloudImg} blending={AdditiveBlending} opacity={0.8} transparent={true} />
            </mesh>
        </group>
    )
}

const EarthCanvas = () => {
    return (
        <div className="h-[450px]">
        <Canvas frameloop="demand"
        gl={{preserveDrawingBuffer: true}} 
        camera={{ fav: 45, near: 0.9, position: [2, 0, 0.1] }}
        >
            <Suspense fallback={null} >
                <OrbitControls enableZoom={false} enableRotate={true} autoRotate={true} />
                <directionalLight color={"0xffffff"} position={[-1, 0.5, 1.5]} />
                <Earth />
            </Suspense>
            <Preload all />
        </Canvas>
        </div>
    )
}

export default EarthCanvas