import React from "react";
import ConsultationAreaForm from "./ConsultationAreaForm";

const ConsultationArea = () => {
  return (
    <section className="consultation-area pt-120 pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="consultation-content">
              <div className="section-title mb-25">
                <img src="/img/icon/consultation_icon01.png" alt="" />
                <span className="sub-title">99.9% Accuracy</span>
                <h2 className="title">
                Your Trusted Partner for Innovative Digital Solutions
                </h2>
              </div>
              <p>
              At 20s Developers, we craft digital experiences that drive growth and success. From web development to AI-powered solutions, our team is dedicated to delivering results that exceed your expectations.
              </p>
              <div className="consultation-list">
                <ul className="list-wrap">
                  <li>
                    <div className="icon">
                      <img src="/img/icon/consultation_icon02.png" alt="" />
                      <span>12x</span>
                    </div>
                    <div className="content">
                      <h6 className="title">Faster Order Processing</h6>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="/img/icon/consultation_icon03.png" alt="" />
                      <span>95%</span>
                    </div>
                    <div className="content">
                      <h6 className="title">Processing Accuracy</h6>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <ConsultationAreaForm />
          </div>
        </div>
      </div>

      <div className="consultation-shape-wrap">
        <img
          src="/img/images/consultation_shape01.png"
          alt=""
          className="shape-one ribbonRotate"
        />
        <img
          src="/img/images/consultation_shape02.png"
          alt=""
          className="shape-two float-bob-x"
        />
      </div>
    </section>
  );
};

export default ConsultationArea;
