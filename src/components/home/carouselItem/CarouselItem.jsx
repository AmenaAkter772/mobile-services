import React from 'react';
import { Carousel } from 'react-bootstrap';
const CarouselItem = () => {
    return (
        <>
            <Carousel id="home" fade>
                <Carousel.Item style={{ backgroundColor: 'black' }}>
                    <img
                        style={{ opacity: '0.3', height: '500px' }}
                        className="w-100"
                        src='https://glimageurl.golocall.com/golocal-post/image/936258_qbn81510987249.png'
                        alt="First slide"
                    />
                    <Carousel.Caption style={{ textAlign: 'start' }} className="h-100 d-flex align-items-center me-5">
                        <div className="">
                            <p style={{ fontSize: '1rem' }}>We give you the best!</p>
                            <h1 style={{ fontSize: '3rem' }}>Fast Repair Your <br /> Smart Phone</h1>
                            <p>Need professional help? Our support stuff will answer your <br /> questions. Visit us or make an appointment</p>
                            <button className="brand-btn">Read More</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ backgroundColor: 'black' }}>
                    <img
                        style={{ opacity: '0.5', height: '500px' }}
                        className="w-100"
                        src='http://fixtech.themetechmount.com/wp-content/uploads/revslider/home-classicmain-slider2/mainslider-bg003.jpg'
                        alt="First slide"
                    />
                    <Carousel.Caption className="h-100 d-flex align-items-center justify-content-center">
                        <div className="">
                            <h1 style={{ fontSize: '60px' }}>COMPUTER PROBLEMS?</h1>
                            <p style={{ fontSize: '20px' }}>We help to fixed all problems</p>
                            <h4 style={{ fontSize: '30px' }}>CALL NOW 01922226666</h4>
                            <button className="brand-btn mt-3">Read More</button>

                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <p id="service"></p>
        </>

    );
};

export default CarouselItem;