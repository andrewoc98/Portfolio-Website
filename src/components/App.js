import { Canvas } from '@react-three/fiber';
import React, { Suspense, useState } from 'react';
import Earth from './Earth'
import Clouds from './Clouds'
import Stars from './Stars'
import Moon from './Moon'
import Loader from './Loader'
import NavBar from './NavBar';
import Home from './Home';
//TODO: Framer motion 
function App() {
  const [text ,setText]= useState(<Home/>)
  
  return (
    <div className="container">
      
      <div className="App">
        <div>
          <NavBar changeText={text => setText(text)} />

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