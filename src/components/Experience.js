import React from "react"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import '../common/design/App.css'
//TODO: fill out details

function Experience() {
    return (
        <div className="title-container">
            <Splide>
                <SplideSlide>
                    <div className="div-slider" >
                        <h1>Repair Technician – Electronic Service Centre:</h1>
                        <p className="slider">
                            <b>Oct 2021- Present</b><br />
                            <b>E</b>valuate the item. Understand it fully. determine the fault.<br />
                            <b>A</b>im for a certain deadline<br />
                            <b>R</b>epair Item<br />
                            <b>T</b>est all funtionality to ensure perfect working order<br />
                            <b>H</b>and Item back to Customer
                        </p>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="div-slider" >
                        <h1>Glucksman Library – Peer Advisor:</h1>
                        <p className="slider">
                            <b>Sep 2020 - Dec 2020</b><br />
                            <b>S</b>peak Clearly and concisely<br />
                            <b>P</b>rovide infromation to student to reslove there queries<br />
                            <b>A</b>rchive all student tickets for review<br />
                            <b>C</b>atch up with managers and co-workers bi-weekly to identify recurring issues<br />
                            <b>E</b>valuate steps that can be taken to resolve them<br />
                        </p>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="div-slider"  >
                        <h1>Ixp Intern – SAP:</h1>
                        <p className="slider">
                            <b>Jun 2019- Jan 2020</b><br />
                            <b>M</b>eet with team members to ensure everyone is up to speed with all outstanding issues<br />
                            <b>O</b>rganise and delegate tickets as they come in to team-members<br />
                            <b>O</b>bserve and assess open eco system applications <br />
                            <b>N</b>otify IT of any issues on there end that need resolving<br />
                        </p>
                    </div>
                </SplideSlide>
            </Splide>

            <br />
        </div>
    )
} export default Experience