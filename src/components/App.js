import { Canvas } from '@react-three/fiber';
import React, { Suspense, useState } from 'react';
import Earth from './Earth'
import Clouds from './Clouds'
import Stars from './Stars'
import Moon from './Moon'
import Loader from './Loader'
import NavBar from './NavBar';
import Home from './Home';
import Education from './Education';
import Experience from './Experience';

function App() {
  const [text,setText]= useState(<Home/>)
  
  function loadHome(){
    setText(text=<Home/>)
  }
  function loadEducation(){
    setText(text=<Education/>)
  }
  
function loadExperience(){
  setText(text=<Experience/>)
}
  return (
    <div className="container">
      <div className="App">
        <div>
          <NavBar />

          <Canvas >

            <Suspense fallback={<Loader />} >
              <Stars />
              <Earth />
              <Clouds />
              <Moon />
            </Suspense>
          </Canvas>



        </div>
      {text}
      </div>
    </div>
  );
}




export default App