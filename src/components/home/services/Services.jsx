import React from 'react';
import { serviceData } from '../../../fakeData/FakeData';
import './Services.css'

const Services = () => {

    return (
        <>
            <div className="container my-5 pt-5">
                <h5 style={{ textAlign: 'center', color: '#FF5733 ' }}>Our Services</h5>
                <h2 style={{ textAlign: 'center', color: '#3a4256' }}>Services We Provide</h2>
                <div className="mt-5 d-flex row">
                    {
                        serviceData.map(data =>
                            <div className="col-md-3">
                                <div style={{ height: '280px' }} className="card serviceCard px-3">
                                    <h4 style={{ fontSize: '50px' }} className="py-3 d-flex justify-content-center icon">{data.icon}</h4>
                                    <h5 className="d-flex justify-content-center">{data.name}</h5>
                                    <p className="serviceText">{data.text}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default Services;