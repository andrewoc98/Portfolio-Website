import { Canvas } from '@react-three/fiber';
import React, {Suspense } from 'react';
import Earth from './Earth'
import Clouds from './Clouds'
import Stars from './Stars'
import Moon from './Moon'
import Loader from './Loader'





function App() {
  
  return (
    <div className="App">
      
      <Canvas >
        <Suspense fallback={<Loader/>} >
          <Stars/>
          <Earth />
          <Clouds/>
          <Moon/>
        </Suspense>
      </Canvas>
    </div>
  );
}
export default App
