import React from "react"
import Home from "./Home"
import Education from "./Education"
import Experience from "./Experience"
import '../../common/design/App.css'
import Audio from "./Audio"

//TODO: link all the nav bar buttons
//TODO: Add transitions to each selection

function NavBar(props) {
    return (
        <nav className="navigation">
            <button className="button" onClick={Audio}>Play/Pause Music</button>
            <ul className="nav-menu">
                
                <li className="nav-items" ><a onClick={()=>props.changeText(<Home/>)}>Home</a></li>
                <li className="nav-items" ><a onClick={()=>props.changeText(<Education/>)}>Education</a></li>
                <li className="nav-items" ><a onClick={()=>props.changeText(<Experience/>)}>Experience</a></li>
                <li className="nav-items"><a href="https://drive.google.com/file/d/1kfmgpQzRA2uIpCnE_pnPQihCOPMHtEvK/view?usp=sharing" target="_blank">CV</a></li>
                <li className="nav-items"><a href="https://github.com/andrewoc98" target="_blank">GitHub</a></li>
            </ul>
        </nav>
    )
}
export default NavBar