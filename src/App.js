import ReactDOM from 'react-dom'
import React, { useRef, useState, useEffect,Suspense  } from 'react'
import { Canvas, useFrame ,useLoader } from '@react-three/fiber'
import * as THREE from 'three';
import { TextureLoader } from "three/src/loaders/TextureLoader";
import Color from './Images/Color.jpg'
import ao from './Images/3tqI6.jpg'
import displacement from './Images/displacement_Map.jpg'
import moonColor from './Images/moon.jpg'
import CloudTexture from './Images/earthCloud.png'


function Clouds(){
  var gcloud = new THREE.SphereGeometry(2.1,32,32)
  var mcloud = new THREE.MeshPhongMaterial({map:THREE.ImageUtils.loadTexture(CloudTexture),transparent:true});
  var cloudMesh = new THREE.Mesh(gcloud,mcloud);
  useFrame(()=>{
    cloudMesh.rotateY(0.002)
    cloudMesh.rotateX(0.001)
  })
  return(
    <primitive object={cloudMesh}/>
  );
}

function Moon(){
  const moonGeo = new THREE.SphereGeometry(0.1,30,30);
  const moonMat= new THREE.MeshStandardMaterial()
  moonMat.map=THREE.ImageUtils.loadTexture(moonColor)
  const moon = new THREE.Mesh(moonGeo,moonMat);
  const moonObj = new THREE.Object3D();

  moonObj.add(moon);
  moon.position.x=3.5
  moon.position.y=1
  moonObj.rotateX(0.4)
  useFrame(()=>{
    moonObj.rotateY(0.02);
    
  })
  
  
  return(
          <primitive object={moonObj}/>
          )
}
function Stars(){
  
  const starVertices=[]

  const starGeometry = new THREE.BufferGeometry()

  const starMaterial= new THREE.PointsMaterial({
    color:0xffffff
  })


  const stars=new THREE.Points(starGeometry,starMaterial)
  const sun = new THREE.PointLight;
  sun.position.set(0,0,10)
  for(let i=0;i<10000;i++){
    const x=(Math.random()-0.5)*2000
    const y=(Math.random()-0.5)*2000
    const z=-Math.random()*2000
    starVertices.push(x,y,z)
  }
  for(let i=0;i<10000;i++){
    const x=(Math.random()-0.5)*2000
    const y=(Math.random()-0.5)*2000
    const z=Math.random()*2000
    starVertices.push(x,y,z)
  }

  stars.add(sun)
  starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices,3))
  useFrame(()=>{
    stars.rotateY(-0.005)
    
  })
  return(
        <primitive object={stars}/>
        )
}
function Earth() {
  const myMesh = React.useRef();
  
  useFrame(() => {
    
    myMesh.current.rotation.y += 0.0015;
  });
  const name = useLoader(TextureLoader,Color);
  const aob =useLoader(TextureLoader,ao)
  const displacementM =useLoader(TextureLoader, displacement)
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

export default function App() {
  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={null}>
          <Stars/>
          <Earth />
          <Clouds/>
          <Moon/>
        </Suspense>
      </Canvas>
    </div>
  );
}
