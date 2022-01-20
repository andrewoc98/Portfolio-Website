import * as THREE from 'three';
import moonColor from '../common/img/moon.jpg';
import moonBump from '../common/img/moonRoughness.jpg'
import {useFrame } from '@react-three/fiber'


function Moon() {
    const moonGeo = new THREE.SphereGeometry(0.1, 30, 30);
    const moonMat = new THREE.MeshStandardMaterial()
    moonMat.map = THREE.ImageUtils.loadTexture(moonColor)
    moonMat.displacementMap=THREE.ImageUtils.loadTexture(moonBump)
    moonMat.displacementScale=0.02
    const moon = new THREE.Mesh(moonGeo, moonMat);
    const moonObj = new THREE.Object3D();

    moonObj.add(moon);
    moon.position.x = 3.5
    moon.position.y = 1
    moonObj.rotateX(0.4)
    useFrame(() => {
        moonObj.rotateY(0.02);

    })


    return (
        <primitive object={moonObj} />
    )
}
export default Moon