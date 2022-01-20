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
                    <div className="div-slider" ><p className="slider">test</p></div>
                    </SplideSlide>
                    <SplideSlide>
                    <div className="div-slider" ><p className="slider">test</p></div>
                    </SplideSlide>
                    <SplideSlide>
                    <div className="div-slider"  ><p className="slider">test</p></div>
                    </SplideSlide>
                </Splide>

                <br />
            </div>
    )
} export default Experience