import React, {useState} from "react";
import NavBar from "./NavBar";
import Home from "./Home";

function Content(){
    const [text ,setText]= useState(<Home/>)

    return(
        <div className="content-wrappper">
            <div className="nav-bar-div">
                <NavBar changeText={text => setText(text)}/>
            </div>
            <div className="text-div">
                {text}
            </div>
        </div>
    )

}export default Content