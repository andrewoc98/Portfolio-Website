import * as THREE from 'three';
import {useFrame} from '@react-three/fiber'
import React from 'react';
function Loader() {
    const loaderMesh = React.useRef()
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
    const cube = new THREE.Mesh( geometry, material );
    useFrame(() => {
            loaderMesh.current.rotation.z=0.5
    });
    return (
        <mesh ref={loaderMesh}>
                {/* Width and height segments for displacementMap */}
                <boxBufferGeometry />
                <meshBasicMaterial
                />

            </mesh>
    )
}
export default Loader