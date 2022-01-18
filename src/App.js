import ReactDOM from 'react-dom'
import React, { useRef, useState, useEffect,Suspense  } from 'react'
import { Canvas, useFrame ,useLoader } from '@react-three/fiber'
import * as THREE from 'three';
import { OrbitControls, useTexture } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import Color from './Images/Color.jpg'
import ao from './Images/3tqI6.jpg'
import MoonColor from './Images/moon.jpg';
import displacement from './Images/displacement_Map.jpg'
import moonColor from './Images/moon.jpg'
import moonRough from './Images/WAC_GLD100_E000N1800_004P-1024x512.jpg'


function Moon(){

  const myMoonMesh=React.useRef();

  useFrame(()=>{
    myMoonMesh.current.rotation.y=0.01;
    
  })
  const moon = useLoader(TextureLoader, moonColor)
  const moonR = useLoader(TextureLoader, moonRough)
  return(
          <mesh ref={myMoonMesh} position={[0,1.5,1]}>
              
        {/* Width and height segments for displacementMap */}
        <sphereBufferGeometry args={[0.1, 100, 100]} />
        <meshStandardMaterial
        map={moon}
         roughnessMap={moonR}
        />
            </mesh>
          )
}
function Stars(){
  
  const starVertices=[]

  const starGeometry = new THREE.BufferGeometry()

  const starMaterial= new THREE.PointsMaterial({
    color:0xffffff
  })


  const stars=new THREE.Points(starGeometry,starMaterial)

  for(let i=0;i<1000;i++){
    const x=(Math.random()-0.5)*2000
    const y=(Math.random()-0.5)*2000
    const z=-Math.random()*2000
    starVertices.push(x,y,z)
  }

  starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices,3))
  
  return(
        <primitive object={stars}/>
        )
}
function Earth() {
  const myMesh = React.useRef();
  useFrame(() => {
    
    myMesh.current.rotation.y += 0.01;
  });
  const name = useLoader(TextureLoader,Color);
  const aob =useLoader(TextureLoader,ao)
  const displacementM =useLoader(TextureLoader, displacement)
  return (
    <>
      <ambientLight color={"white"} intensity={0.05}></ambientLight>
      <pointLight color="white" intensity={1} position={[10, 0,0]} />
      <mesh ref={myMesh}>
        {/* Width and height segments for displacementMap */}
        <sphereBufferGeometry args={[1, 100, 100]} />
        <meshStandardMaterial 
          
          displacementScale={0.05}
          map={name}
          roughnessMap={aob}
          displacementMap={displacementM}
        />
        <Moon/>
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
        </Suspense>
      </Canvas>
    </div>
  );
}
