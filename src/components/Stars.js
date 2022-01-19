import * as THREE from 'three';
import {useFrame} from '@react-three/fiber'
function Stars() {

    const starVertices = []

    const starGeometry = new THREE.BufferGeometry()

    const starMaterial = new THREE.PointsMaterial({
        color: 0xffffff
    })


    const stars = new THREE.Points(starGeometry, starMaterial)
    const sun = new THREE.PointLight();
    sun.position.set(0, 0, 10)
    for (let i = 0; i < 10000; i++) {
        const x = (Math.random() - 0.5) * 2000
        const y = (Math.random() - 0.5) * 2000
        const z = -Math.random() * 2000
        starVertices.push(x, y, z)
    }
    for (let i = 0; i < 10000; i++) {
        const x = (Math.random() - 0.5) * 2000
        const y = (Math.random() - 0.5) * 2000
        const z = Math.random() * 2000
        starVertices.push(x, y, z)
    }

    stars.add(sun)
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3))
    useFrame(() => {
        stars.rotateY(-0.005)

    })
    return (
        <primitive object={stars} />
    )
}
export default Stars
