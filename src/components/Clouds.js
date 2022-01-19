import * as THREE from 'three';
import CloudTexture from '../Images/earthCloud.png';
import {useFrame } from '@react-three/fiber'
function Clouds() {
    var gcloud = new THREE.SphereGeometry(2.1, 32, 32)
    var mcloud = new THREE.MeshPhongMaterial({ map: THREE.ImageUtils.loadTexture(CloudTexture), transparent: true });
    var cloudMesh = new THREE.Mesh(gcloud, mcloud);
    useFrame(() => {
        cloudMesh.rotateY(0.002)
        cloudMesh.rotateX(0.001)
    })
    return (
        <primitive object={cloudMesh} />
    );
}
export default Clouds