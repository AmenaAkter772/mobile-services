import React from 'react';
import { SiVerizon } from 'react-icons/si';
import experience from '../../../assests/Photo/exprience.jpg';

const Experience = () => {

    return (
        <div className="py-5 container d-flex row">
            <div className="ps-5 col-md-6">
                <img src={experience} alt="" className="image-fluid" />
            </div>
            <div className="col-md-6 ps-5">
                <div className="ps-5">
                    <h3>We Have 35 Years Experience In This Passion</h3>
                    <p>We have been in the repairing and services business since 1995. We have experienced service department ready to handle all of your repair tasks. Our team will get your device with guarantee with affordable price.</p>
                    <div>
                        <p><SiVerizon style={{color:"#FF5733 "}} /> <span className="ps-3">Water damaged smartphones</span></p>
                        <p><SiVerizon style={{color:"#FF5733 "}}/> <span className="ps-3">Network related issues.</span></p>
                        <p><SiVerizon style={{color:"#FF5733 "}}/> <span className="ps-3">Broken screens or glass.</span></p>
                        <p><SiVerizon style={{color:"#FF5733 "}}/> <span className="ps-3">Speaker/Microphone Faults.</span></p>
                        <p><SiVerizon style={{color:"#FF5733 "}}/> <span className="ps-3">Physically damaged handsets.</span></p>
                        <p><SiVerizon style={{color:"#FF5733 "}}/> <span className="ps-3">Upgrading Operating System.</span></p>
                        <button className="brand-btn">Make An Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;