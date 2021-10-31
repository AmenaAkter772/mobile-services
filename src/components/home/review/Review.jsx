import React from 'react';
import { reviewData } from '../../../fakeData/FakeData';
import { AiFillStar } from 'react-icons/ai';

const Review = () => {


    return (
        <section style={{ backgroundColor: '#FF5733 ' }}>
            <div className="container py-5" style={{ textAlign: 'center'}}>
                <h3 style={{ color:'white'}}>What Our Client Says</h3>
                <p style={{ color:'white'}} className="py-4">Take a look at what our clients say about our work. We love building <br /> relationships with our customers and clients.</p>
                <div className="row d-flex">
                    {
                        reviewData.map(data =>
                            <div className="col-md-4">
                                <div className="card" >
                                    <div className="d-flex p-3">
                                        <img style={{ height: '70px', borderRadius: '50%' }} className="image-fluid" src={data.authorImg} alt="" />
                                        <div className="ps-3">
                                            <h5>{data.name}</h5>
                                            <p>{data.date}</p>
                                            <p style={{ color: '#FF5733 ' }}><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></p>
                                        </div>
                                    </div>
                                    <p>{data.description}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <p  id="contact"></p>
        </section>
    );
};

export default Review;