
import React, { Suspense } from 'react';

import Loader from './Loader'
import NavBar from './content/NavBar';
import Home from './content/Home';
import Planet_Canvas from './planet_canvas/Planet_Canvas';
import Content from './content/Content';
//TODO: Framer motion https://www.framer.com/docs/transition/
function App() {


  return (
    
      <div className='content'>
        <Content />
        <div />
        <div className="App">
          <Planet_Canvas />
        </div>
      </div>

  );
}



export default App