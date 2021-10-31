import React from 'react';
import './Footer.css';
import { MdLocationOn } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import { BsTelephoneFill, BsAlarm, BsFacebook, BsGoogle, BsTwitter } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer className="footerMain">
            <div className="pt-5 container d-flex row">
                <div className="ps-5 col-md-3">
                    <div>
                        <h3>TechFix</h3>
                        <p>TechFix has very good strength in innovative technology and tools with over 35 years of experience. <br /><br />
                            We makes long-term investments goal in global companies in different sectors, mainly in Europe and other countries.
                        </p>
                        <button className="brand-btn">Know more</button>
                    </div>
                </div>
                <div className="ps-5 col-md-3">
                    <div>
                        <h3>Quick Links</h3>
                        <p className="footerHover">Make Appointments</p>
                        <p className="footerHover">Before & After</p>
                        <p className="footerHover">Customer Services</p>
                        <p className="footerHover">Order a Service</p>
                        <p className="footerHover">Track Service Status</p>
                        <p className="footerHover">Live chat support</p>
                    </div>
                </div>
                <div className="ps-5 col-md-3">
                    <div>
                        <h3>Company</h3>
                        <p className="footerHover">About</p>
                        <p className="footerHover">Project</p>
                        <p className="footerHover">Our Team</p>
                        <p className="footerHover">Terms Conditions</p>
                        <p className="footerHover">Submit Listing</p>
                    </div>
                </div>
                <div className="ps-5 col-md-3">
                    <div>
                        <h3>Get In Touch</h3>
                        <div className="d-flex">
                            <p><MdLocationOn /></p>
                            <p>H#000 HQ 24 Fifth st.,<br />Los Angeles, USA</p>
                        </div>
                        <p><HiOutlineMail /><span className="ps-3">info@example.com</span></p>
                        <p><BsTelephoneFill /><span className="ps-3">(+01) 123 456 7890</span></p>
                        <p><BsAlarm /><span className="ps-3">09:30 AM - 06:00PM</span></p>
                        <div className="ps-5 gap-3 d-flex">
                            <p className="footerHover"><BsFacebook /></p>
                            <p className="footerHover"><BsGoogle /></p>
                            <p className="footerHover"><BsTwitter /></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 pt-5 pb-2 copyRight text-center">
                <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;