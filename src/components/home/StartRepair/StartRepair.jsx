import React from 'react';
import { startRepair } from '../../../fakeData/FakeData';
import { Card, Row } from 'react-bootstrap'
import Slider from 'react-slick';



const StartRepair = () => {

    const settings = {
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true,
        autoplay: true,
        autoPlaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    }

    return (
            <section className="col-md-11 container-fluid mt-5 mb-5 pb-5">
                <div className="text-center mt-3 mb-5">
                    <h2 style={{ color: '#3a4256' }}>Get Your Repair Started</h2>
                    <p style={{ color: 'gray' }}>All kind of brands computer, laptop, camera, smartphones,  gadgets to be get <br /> repaired here. Our Expert team will look after it.</p>
                </div>
                <Slider className='mt-3 container-fluid'  {...settings}>
                    {
                        startRepair.map(item => (
                            <Row className="container w-100 row">
                                <div className="">
                                    <img className="img-fluid card-carousel" src={item.image} alt="" style={{ height: '40vh' }} />
                                    <div style={{borderBottom:'1px solid lightgray'}} className="pb-3 serviceCard px-3">
                                        <h4 style={{ fontSize: '50px' }} className="text-center py-3 d-flex justify-content-center icon">{item.icon}</h4>
                                        <h5 className="text-center d-flex justify-content-center">{item.name}</h5>
                                        <p className=" serviceText">{item.text}</p>
                                    </div>
                                </div>
                            </Row>
                        ))
                    }
                </Slider>
            </section>
    );
};

export default StartRepair;