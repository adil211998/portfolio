'use client'

import { Canvas } from '@react-three/fiber'
import { useMemo } from 'react'
import * as THREE from 'three'

const Particles = () => {
    const particlesCount = 5000;
    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 4;

    const positions = useMemo(() => {
        const positions = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount; i++) {
            const i3 = i * 3;

            // Randomly choose which face of the box to place the particle on
            const face = Math.floor(Math.random() * 6);

            const halfWidth = boxWidth / 2;
            const halfHeight = boxHeight / 2;
            const halfDepth = boxDepth / 2;

            positions[i3] = (Math.random() - 0.5) * boxWidth;
            positions[i3 + 1] = (Math.random() - 0.5) * boxHeight;
            positions[i3 + 2] = (Math.random() - 0.5) * boxDepth;

            // switch(face) {
            //     case 0: // Front face
            //         positions[i3] = (Math.random() - 0.5) * boxWidth;
            //         positions[i3 + 1] = (Math.random() - 0.5) * boxHeight;
            //         positions[i3 + 2] = halfDepth;
            //         break;
            //     case 1: // Back face
            //         positions[i3] = (Math.random() - 0.5) * boxWidth;
            //         positions[i3 + 1] = (Math.random() - 0.5) * boxHeight;
            //         positions[i3 + 2] = -halfDepth;
            //         break;
            //     case 2: // Top face
            //         positions[i3] = (Math.random() - 0.5) * boxWidth;
            //         positions[i3 + 1] = halfHeight;
            //         positions[i3 + 2] = (Math.random() - 0.5) * boxDepth;
            //         break;
            //     case 3: // Bottom face
            //         positions[i3] = (Math.random() - 0.5) * boxWidth;
            //         positions[i3 + 1] = -halfHeight;
            //         positions[i3 + 2] = (Math.random() - 0.5) * boxDepth;
            //         break;
            //     case 4: // Right face
            //         positions[i3] = halfWidth;
            //         positions[i3 + 1] = (Math.random() - 0.5) * boxHeight;
            //         positions[i3 + 2] = (Math.random() - 0.5) * boxDepth;
            //         break;
            //     case 5: // Left face
            //         positions[i3] = -halfWidth;
            //         positions[i3 + 1] = (Math.random() - 0.5) * boxHeight;
            //         positions[i3 + 2] = (Math.random() - 0.5) * boxDepth;
            //         break;
            // }
        }

        return positions;
    }, [particlesCount, boxWidth, boxHeight, boxDepth]);

    return (
        <points>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particlesCount}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.02}
                color="#ff0000"
                sizeAttenuation={true}
                transparent={true}
                opacity={0.8}
            />
        </points>
    );
};

const GalaxyPage = () => {
    return <Canvas style={{ width: '100vw', height: '100vh', background: "#000" }}>
        <directionalLight position={[0, 0, 5]} />
        <ambientLight intensity={1} />
        <Particles />
    </Canvas>;
}

export default GalaxyPage;