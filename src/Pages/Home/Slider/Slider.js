import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css';
import silder1 from '../../../images/sliders/slider-banner-1.jpg'
import silder2 from '../../../images/sliders/slider-banner-2.jpg'
import silder3 from '../../../images/sliders/slider-banner-3.jpg'
import silder4 from '../../../images/sliders/slider-banner-4.jpg'
const Slider = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className="slider">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={silder1}
                        alt="TRAVELLING AROUND THE WORLD"
                    />
                    <Carousel.Caption>
                        <h2>TRAVELLING AROUND THE WORLD</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={silder2}
                        alt="EXPERIENCE THE NATURE'S BEAUTY"
                    />

                    <Carousel.Caption>
                        <h3>EXPERIENCE THE NATURE'S BEAUTY</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={silder3}
                        alt="Finest Luxury Hotels  in  Moritz"
                    />

                    <Carousel.Caption>
                        <h3>Finest Luxury Hotels  in  Moritz</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={silder4}
                        alt="Let's Discover the world  together!"
                    />

                    <Carousel.Caption>
                        <h3>Let's Discover the world  together!</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;