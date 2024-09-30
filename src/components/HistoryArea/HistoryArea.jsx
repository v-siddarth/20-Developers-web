import React from "react";
import HistoryAreaRoadmap from "./HistoryAreaRoadmap";

const HistoryArea = () => {
  return (
    <section className="history-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title white-title text-center mb-45">
              <span className="sub-title">Our Journey</span>
              <h2 className="title">20s Developers History</h2>
              <p>
                At 20s Developers, our journey began with a vision to innovate and provide groundbreaking digital solutions that solve real-world problems. We’ve grown from a small team to a thriving company, dedicated to helping businesses succeed through technology.
              </p>
            </div>
          </div>
        </div>
        <div className="history-inner">
          <div className="history-img">
            <img src="/img/images/history_img.jpg" alt="" />
          </div>
          <div className="row g-0 justify-content-end">
            <div className="col-lg-6">
              <div className="history-content">
                <h2 className="title">
                  Built on Innovation and Passion
                </h2>
                <p>
                  Our story is rooted in a passion for creating meaningful digital products. From launching high-performance websites to crafting AI-driven solutions, our intention has always been to empower businesses to grow and thrive through technology.
                </p>
                <ul className="list-wrap">
                  <li>
                    <i className="far fa-check"></i>Delivering high-quality digital solutions
                  </li>
                  <li>
                    <i className="far fa-check"></i>Fostering innovation in web and app development
                  </li>
                  <li>
                    <i className="far fa-check"></i>Committed to customer success and growth
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
  
        {/* road map */}
        <HistoryAreaRoadmap />
      </div>
  
      <div className="history-shape-wrap">
        <img src="/img/images/history_shape01.png" alt="" />
        <img src="/img/images/history_shape02.png" alt="" />
      </div>
    </section>
  );
  
};

export default HistoryArea;
