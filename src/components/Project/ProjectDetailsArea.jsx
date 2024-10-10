import React from "react";
import CounterWrapFour from "../CounterArea/CounterWrapFour";

const ProjectDetailsArea = () => {
  return (
    <section className="project-details-area pt-40 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="project-details-inner">
              <div className="project-details-img">
                <img src="/img/images/project_details_img.jpg" alt="Project Image" />
              </div>
              <div className="project-details-content">
                <h2 className="title">Innovative Digital Solutions</h2>
                <p>
                  At 20s Developers, we provide tailored digital solutions that meet your unique business needs. Our team specializes in web development, mobile app creation, and cutting-edge SaaS & PaaS products. From conceptualization to execution, we focus on delivering quality and driving results. Our solutions empower businesses to grow and succeed in the fast-paced digital world.
                </p>
                <p>
                  Whether you're a startup or an established company, our expertise helps you stay competitive. We take pride in transforming ideas into digital reality, and our focus is always on your success. Let us help you innovate and create a lasting digital impact.
                </p>
              </div>

              <div className="row align-items-center">
                <div className="col-lg-12">
                  {/* counter wrap four */}
                  <CounterWrapFour />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="project-shape-wrap">
        <img src="/img/images/services_details_shape.png" alt="Service Details Shape" />
      </div>
    </section>
  );
};

export default ProjectDetailsArea;
