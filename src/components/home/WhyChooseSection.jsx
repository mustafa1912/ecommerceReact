import React from 'react'
import truck from '../../assets/images/truck.svg'
import bag from '../../assets/images/bag.svg'
import support from '../../assets/images/support.svg'
import returnsvg from '../../assets/images/return.svg'
import whyChoose from '../../assets/images/why-choose-us-img.jpg'

const WhyChooseSection = () => {

  const features = [
    { img: truck, title: "Fast & Free Shipping" },
    { img: bag, title: "Easy to Shop" },
    { img: support, title: "24/7 Support" },
    { img: returnsvg, title: "Hassle Free Returns" },
  ];

  return (
    <div className="why-choose-section">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-6">
            <h2 className="section-title">Why Choose Us</h2>
            <p>Donec vitae odio quis nisl dapibus malesuada...</p>

            <div className="row my-5">
              {features.map((f, i) => (
                <div key={i} className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img src={f.img} alt="" />
                    </div>
                    <h3>{f.title}</h3>
                    <p>Donec vitae odio quis nisl dapibus malesuada...</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-5">
            <div className="img-wrap">
              <img
                src={whyChoose}
                className="img-fluid"
                alt="why choose"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default WhyChooseSection
