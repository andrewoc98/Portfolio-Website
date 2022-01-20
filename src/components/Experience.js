import React from "react"

//TODO: fill out details

function Experience() {
    return (

        <div className="title-container">
            <div className="slideshow-container">
                <div className="mySlides">
                    <h1>Experience</h1>
                    <p>
                        <b>Repair Technician – Electronic Service Centre:</b><br />
                        Oct 2021 - Present<br />
                        <b>E</b>valuate the issue. Whats wrong.<br />
                        <b>A</b>im for a goal<br />
                        <b>R</b>epair Item<br />
                        <b>T</b>est Item. does all functitonality work<br />
                        <b>H</b>and Item off to customer<br />
                    </p>
                    <br />
                </div>
                <div className="mySlides">
                    <q>But man is not made for defeat. A man can be destroyed but not defeated.</q>
                    <p className="author">- Ernest Hemingway</p>
                </div>
                <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a className="next" onclick="plusSlides(1)">&#10095;</a>
            </div>
        </div>
    )
} export default Experience