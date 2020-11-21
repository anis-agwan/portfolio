import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./Carousel.style.css";
import solid from "../../assets/img/Carousal/solid.png";
import ScrollDown from "../ScrollDown/ScrollDown.component";

const CarouselSection = () => {
    return (
        <>
        <div id="home">
            <Carousel controls={false} indicators interval={0} pause={false}>
                <Carousel.Item>
                    <img
                    className="d-block w-100 custom-img"
                    src={solid}
                    alt="First slide"
                    />
                </Carousel.Item>
                
            </Carousel>
            <ScrollDown />
        </div>
        </>
    )
}

export default CarouselSection;
