import React from 'react'
import couch from '../../assets/images/couch.png'
const HeroSection = () => {
    return (
        <div className="hero">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5">
                        <div className="intro-excerpt">
                            <h1>
                                Modern Interior <span className="d-block">Design Studio</span>
                            </h1>

                            <p className="mb-4">
                                Donec vitae odio quis nisl dapibus malesuada...
                            </p>

                            <p>
                                <a href="#" className="btn btn-secondary me-2">
                                    Shop Now
                                </a>
                                <a href="#" className="btn btn-white-outline">
                                    Explore
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="hero-img-wrap">
                            <img src={couch} className="img-fluid" alt="couch" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection 
