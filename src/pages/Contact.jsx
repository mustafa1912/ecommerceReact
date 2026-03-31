import React from 'react'
import HeroSection from '../components/home/HeroSection ';

import couch from '../assets/images/couch.png'

function Contact() {
    return (
        <React.Fragment>
            <HeroSection />
            <div className="untree_co-section">
                <div className="container">
                    <div className="block">
                        <div className="row justify-content-center">
                            <div className="col-md-8 col-lg-8 pb-4">

                                {/* Contact Info */}
                                <div className="row mb-5">

                                    {/* Address */}
                                    <div className="col-lg-4">
                                        <div className="service d-flex align-items-center">
                                            <div className="service-icon me-3">
                                                📍
                                            </div>
                                            <p>43 Raymouth Rd. Baltemoer, London 3910</p>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="col-lg-4">
                                        <div className="service d-flex align-items-center">
                                            <div className="service-icon me-3">
                                                📧
                                            </div>
                                            <p>info@yourdomain.com</p>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="col-lg-4">
                                        <div className="service d-flex align-items-center">
                                            <div className="service-icon me-3">
                                                📞
                                            </div>
                                            <p>+1 294 3925 3939</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Form */}
                                <form>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label className="text-black" htmlFor="fname">
                                                    First name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="fname"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-6">
                                            <div className="form-group">
                                                <label className="text-black" htmlFor="lname">
                                                    Last name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="lname"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="text-black" htmlFor="email">
                                            Email address
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                        />
                                    </div>

                                    <div className="form-group mb-5">
                                        <label className="text-black" htmlFor="message">
                                            Message
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="message"
                                            cols="30"
                                            rows="5"
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="btn btn-primary">
                                        Send Message
                                    </button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Contact;