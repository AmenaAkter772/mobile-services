import React from 'react';

const Contact = () => {
    return (
        <section style={{ backgroundColor:'#f5eae7'}} className="contact mt-5 py-5">
            <div className="container">
                <div style={{color:'#FF5733 '}} className="section-header text-center">
                    <h5>Contact</h5>
                    <h1>Always connect with us</h1>
                </div>
                <div className="col-md-9 mx-auto">
                    <form action="">
                        <input type="text" className="form-control" placeholder="Email Address *" /><br />
                        <input type="text" className="form-control" placeholder="Subject *" /><br />
                        <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea><br />
                        <div className="submit-btn text-center">
                            <button type="button" className="brand-btn"> Submit </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;