import Earth from '../planet_canvas/Earth'
import Clouds from '../planet_canvas/Clouds'
import Stars from '../planet_canvas/Stars'
import Moon from '../planet_canvas/Moon'
import { Canvas } from '@react-three/fiber';
import Loader from '../Loader';
import React from 'react';
import { Suspense } from 'react';
function Planet_Canvas(){
    return(
        <Canvas >

        <Suspense fallback={<Loader />} >
          <Stars />
          <Earth />
          <Clouds />
          <Moon />
        </Suspense>
      </Canvas>
    )
}export default Planet_Canvas