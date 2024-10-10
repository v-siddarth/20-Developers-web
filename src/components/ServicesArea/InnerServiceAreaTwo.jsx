import React from "react";
import InnerServiceAreaTwoItem from "./InnerServiceAreaTwoItem";

const InnerServiceAreaTwo = () => {
  const services = [
    {
      src: "/img/icon/inner_two_services_icon01.png",
      url: "/services-details",
      titles: ["Web Development", "Design"],
      desc: `We build responsive, user-friendly websites that help your business grow in the digital space.`,
    },
    {
      src: "/img/icon/inner_two_services_icon02.png",
      url: "/services-details",
      titles: ["Mobile App Development", "Design"],
      desc: `Our custom mobile applications are designed to improve customer engagement and provide seamless experiences.`,
    },
    {
      src: "/img/icon/inner_two_services_icon03.png",
      url: "/services-details",
      titles: ["Business Growth Solutions", "Marketing"],
      desc: `We provide comprehensive solutions to grow your business, including marketing, branding, and analytics services.`,
    },
    {
      src: "/img/icon/inner_two_services_icon04.png",
      url: "/services-details",
      titles: ["SaaS & PaaS Products", "Innovation"],
      desc: `Our innovative software and platform-as-a-service products are tailored to meet your business needs and ensure scalability.`,
    },
  ];

  return (
    <section className="inner-services-area-two pt-110 pb-90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8">
            <div className="section-title text-center mb-65">
              <h2 className="title">
                Innovative Solutions for Your Business Needs
              </h2>
              <p>
                At 20s Developers, we offer a wide range of services to ensure your business thrives in the digital age. From web and mobile development to marketing and custom solutions, we have you covered.
              </p>
            </div>
          </div>
        </div>

        <div className="inner-services-wrap-two">
          <div className="row justify-content-center">
            {services.map((x, index) => (
              <div key={index} className="col-xl-3 col-lg-3 col-md-6 col-sm-10">
                <InnerServiceAreaTwoItem item={x} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerServiceAreaTwo;
