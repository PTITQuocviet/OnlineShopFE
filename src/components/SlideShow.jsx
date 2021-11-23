import React from 'react'
import slide1 from '../assets/images/slider/slideshow.png'
import slide2 from '../assets/images/slider/slideshow1.png'
import { Carousel } from 'react-bootstrap'

const SlideShow = () => {
    return (
        <div className="slide_show_home">
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide2}
                        alt="Second slide"
                    />
                </Carousel.Item>

            </Carousel>
        </div>
    )
}

export default SlideShow
