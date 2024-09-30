import React from "react";
import InnerServicesAreaItem from "./InnerServicesAreaItem";

const InnerServicesArea = () => {
  const inner_services = [
    {
      src: "/img/icon/inner_services_icon01.png",
      url: "/services-details",
      title: "Business Growth Solutions",
      desc: "Accelerate your business with strategies that drive success and expansion.",
    },
    {
      src: "/img/icon/inner_services_icon02.png",
      url: "/services-details",
      title: "Website and Mobile App Development",
      desc: "Create high-quality, performance-driven websites and mobile applications.",
    },
    {
      src: "/img/icon/inner_services_icon03.png",
      url: "/services-details",
      title: "AI & Machine Learning Models",
      desc: "Develop cutting-edge AI solutions to transform your business operations.",
    },
    {
      src: "/img/icon/inner_services_icon04.png",
      url: "/services-details",
      title: "ERP & Management Software",
      desc: "Streamline your business processes with tailored management solutions.",
    },
    {
      src: "/img/icon/inner_services_icon05.png",
      url: "/services-details",
      title: "Customizable Desktop Software",
      desc: "Tailored desktop applications to meet your specific business needs.",
    },
    {
      src: "/img/icon/inner_services_icon06.png",
      url: "/services-details",
      title: "Marketing and Branding",
      desc: "Stand out with impactful branding and strategic marketing campaigns.",
    },
    {
      src: "/img/icon/inner_services_icon07.png",
      url: "/services-details",
      title: "E-commerce Development",
      desc: "Build robust online stores designed for maximum engagement and sales.",
    },
    {
      src: "/img/icon/inner_services_icon08.png",
      url: "/services-details",
      title: "Personal Portfolios",
      desc: "Showcase your work with sleek, professional personal portfolio websites.",
    },
  ];
  

  return (
    <section className="inner-services-area pt-110 pb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title title-style-two text-center mb-60">
              <span className="sub-title">Our Services</span>
              <h2 className="title">Innovators. Creators. Game Changers.</h2>
            </div>
          </div>
        </div>

        <div className="inner-services-item-wrap">
          <div className="row justify-content-center">
            {inner_services.map((x, index) => (
              <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <InnerServicesAreaItem item={x} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerServicesArea;
