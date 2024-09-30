import React from "react";
import { Link } from "react-router-dom";

const AboutArea = () => {
  return (
    <section className="about-area">
      <div className="container custom-container">
        <div className="about-inner">
          <div className="row align-items-center justify-content-center">
            <div className="col-46 order-0 order-lg-2">
              <div className="about-img text-end">
                <img src="/img/images/about_img.jpg" alt="" />
              </div>
            </div>
            <div className="col-54">
              <div className="about-content">
                <div className="section-title mb-25">
                  <span className="sub-title">About 20s Developers</span>
                  <h2 className="title">
                  Your Technology Partner
                  </h2>
                </div>
                <p>
                20s Developers delivers innovative web, mobile, and custom software solutions to drive your business forward. We specialize in high-performance designs with a focus on user experience and efficiency.
                </p>
                <ul className="list-wrap">
                  <li>
                    <div className="icon">
                      <img src="/img/icon/about_icon01.png" alt="" />
                    </div>
                    <div className="content">
                      <h4 className="title">Custom Solutions</h4>
                      <p>
                      Tailored to Your Business Needs.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="/img/icon/about_icon02.png" alt="" />
                    </div>
                    <div className="content">
                      <h4 className="title">Innovative Technology</h4>
                      <p>
                      Shaping the Future with AI & ML.
                      </p>
                    </div>
                  </li>
                </ul>
                
                <div className="about-content-bottom">
                  <span>We build the future with technology and creativity.</span>
                  <div className="read-more-btn">
                    <Link to="/about-us" className="btn">
                      Read More <span></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutArea;
