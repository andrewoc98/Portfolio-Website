import React from 'react';
import { Html, useProgress } from '@react-three/drei'
function Loader() {
    const { progress } = useProgress()
    return <Html center>Loading....{progress}% </Html>


}
export default Loader