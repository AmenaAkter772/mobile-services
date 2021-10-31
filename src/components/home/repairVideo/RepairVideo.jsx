import React from 'react';
import './RepairVideo.css';
import { MdSlowMotionVideo } from 'react-icons/md';


const RepairVideo = () => {


    return (
        <div style={{ textAlign: 'center', height: '500px' }} className="d-flex align-items-center justify-content-center addVideo">
            <div>
                <p style={{ fontSize: '80px', cursor: 'pointer', }}><MdSlowMotionVideo /></p>
                <p className="helpText">HOW CAN WE HELP</p>
                <h1>Find Out All Repair Service We Offer.</h1>
                <h5>Get Your Quote or Call: (0080) 123-453-789</h5>
                <button className="brand-btn mt-3">Read More</button>
            </div>
        </div>
    );
};

export default RepairVideo;