import React from "react"
import App from "./App"
function NavBar() {
    return (
        <nav className="navigation">
            <ul className="nav-menu">
                <li className="nav-items" ><a href="#">Home</a></li>
                <li className="nav-items" ><a href="#">Education</a></li>
                <li className="nav-items" ><a href="#">Experience</a></li>
                <li className="nav-items"><a href="https://drive.google.com/file/d/1kfmgpQzRA2uIpCnE_pnPQihCOPMHtEvK/view?usp=sharing" target="_blank">CV</a></li>
                <li className="nav-items"><a href="https://github.com/andrewoc98">GitHub</a></li>
            </ul>
        </nav>
    )
}
export default NavBar