
import React from 'react';
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