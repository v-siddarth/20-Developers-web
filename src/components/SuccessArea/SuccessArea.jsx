import React from "react";
import SuccessList from "./SuccessList";

const SuccessArea = () => {
  return (
    <section className="success-area pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-0 order-lg-2">
            <div className="success-img">
              <img src="/img/images/success_img.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="success-content">
              <div className="section-title title-style-two mb-30">
                <span className="sub-title">Our Achievements</span>
                <h2 className="title">
                  Success Through Innovation and Dedication
                </h2>
              </div>
              <p>
                At 20s Developers, our journey is defined by the solutions we've built, the challenges we've conquered, and the impact we've created. We take pride in helping businesses grow with advanced technology, innovative digital products, and continuous dedication to excellence.
              </p>
  
              {/* success list */}
              <SuccessList />
            </div>
          </div>
        </div>
      </div>
  
      <div className="success-shape-wrap">
        <img src="/img/images/success_shape01.png" alt="" />
        <img src="/img/images/success_shape02.png" alt="" />
      </div>
    </section>
  );  
};

export default SuccessArea;
