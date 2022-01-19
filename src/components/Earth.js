import React from 'react';
import {useFrame ,useLoader } from '@react-three/fiber'
import { TextureLoader } from "three/src/loaders/TextureLoader";
import Color from '../Images/Color.jpg';
import ao from '../Images/3tqI6.jpg';
import displacement from '../Images/displacement_Map.jpg';
function Earth() {
    const myMesh = React.useRef();

    useFrame(() => {

        myMesh.current.rotation.y += 0.0015;
    });
    const name = useLoader(TextureLoader, Color);
    const aob = useLoader(TextureLoader, ao)
    const displacementM = useLoader(TextureLoader, displacement)
    return (
        <>
            <ambientLight color={"white"} intensity={0.05}></ambientLight>

            <mesh ref={myMesh}>
                {/* Width and height segments for displacementMap */}
                <sphereBufferGeometry args={[2, 100, 100]} />
                <meshPhongMaterial

                    displacementScale={0.15}
                    map={name}
                    roughnessMap={aob}
                    displacementMap={displacementM}
                />

            </mesh>
        </>
    );
}
export default Earth