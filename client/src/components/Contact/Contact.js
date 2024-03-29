import React from 'react';
import "./Contact.scss";

const Contact = () => {

    return (
        <div id="web-contact">
            <div className="contact-me-text">
                <div className="all-text">
                    <div className="start-text">
                        <h1>Let's chat.
                            <br />
                            Tell me about your
                            Project.
                        </h1>
                    </div>
                    <h6>Let's create something together</h6>
                    <div className="mail-me">
                        <div className="centre-div">
                            <div className="mail-icon">
                                <div className="icon-bg">
                                    <i className="fa fa-envelope" style={{ "fontSize": "30px" }}></i>
                                </div>
                            </div>
                            <div className="mail-text">
                                <div className="text">Mail me at</div>
                                <div className="email">goyal7sourav@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="contact-me-form">
                <div className="form-box">
                    <form className='contact-form' action="https://formspree.io/f/xwkjjvyj" method="POST">
                        <div className="form-title">
                            <h2>Send me a Message🚀</h2>
                        </div>
                        <div className="imp-details">
                            <input type="text" id="fname" name="Full Name" placeholder='Full Name*' />
                            <input type="email" id="email" name="Email" placeholder='Email address*' />
                            <input type="text" id="subject" name="Subject" placeholder='Subject' />
                        </div>
                        <div className="form-message">
                            <div className="heading-text">
                                <label>Tell us more about your project*</label>
                            </div>
                            <textarea placeholder='Your Message...' id='MessageContent' name='Message'></textarea>
                        </div>
                        <div className="form-button">
                            <div className="my-btn" >
                                {/* <a type='submit'>Submit</a> */}
                                <button type='Submit' className='btn'>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};
export default Contact;