import { PointMaterial, Points, Preload } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import * as random from "maath/random/dist/maath-random.cjs"

const Stars = (props) => {

    const ref = useRef(null);
    const sphereArr = random.inSphere(new Float32Array(5000), {radius: 1.2})

    const {direction} = props

    useFrame((state, delta) => {
        if(direction == "left")
        {
            // ref.current.rotation.x -= delta / 10
            ref.current.rotation.y -= delta / 15
        }
        else
        {
            // ref.current.rotation.x += delta / 10
            ref.current.rotation.y -= delta / 15
        }
    })

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphereArr} stride={3} frustumCulled >
                <PointMaterial 
                    transparent
                    color="rgb(255,255,255)"
                    // color="rgb(17,100,102)"
                    size={0.004}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    )
}

const StarCanvas = () => {

    const [position, setPosition] = useState({x: 0, y: 0, z: 0.1})

    // useEffect(() => {
    //     setPosition({x:0, y:0, z: position.z+0.01})
    // }, [position])

    return (
        <div className="w-full h-auto fixed inset-0 z-[-1] black-bg">
            <div className="fixed inset-0" style={{background: "linear-gradient(180deg, rgba(0,0,0,0.8), transparent)"}} />
            <div className="absolute left-0 h-screen w-1/2">
                <Canvas camera={{ position: [position.x, position.y, position.z] }}>
                    <Suspense fallback={null} >
                        <Stars direction="left" />
                    </Suspense>
                    <Preload all />
                </Canvas>
            </div>
            <div className="absolute right-0 h-screen w-1/2">
                <Canvas camera={{ position: [position.x, position.y, position.z] }}>
                    <Suspense fallback={null} >
                        <Stars direction="right" />
                    </Suspense>
                    <Preload all />
                </Canvas>
            </div>
        </div>
    )
}

export default StarCanvas