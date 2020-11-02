import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./Carousel.style.css";
import slide1 from "../../assets/img/slide-1.webp";
import slide2 from "../../assets/img/slide-2.webp";
import slide3 from "../../assets/img/slide-5.webp";
import ScrollDown from "../ScrollDown/ScrollDown.component";


const CarouselSection = () => {
    return (
        <>
        <div id="home">
            <Carousel controls={false} indicators interval={2500} pause={false}>
                <Carousel.Item>
                    <img
                    className="d-block w-100 custom-img"
                    src={slide1}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 custom-img"
                    src={slide2}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 custom-img"
                    src={slide3}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <ScrollDown />
        </div>
        </>
    )
}

export default CarouselSection;
