import React from "react";
import ServicesAreaItem from "./ServicesAreaItem";

const ServicesArea = () => {
  const services_area_list = [
    {
      title: "Business Growth Solutions",
      desc: "Empowering Your Business Journey.",
      url: "/services-details",
      delay_time: 2,
    },
    {
      title: "Specialized Product Development",
      desc: "Tailored Solutions for Your Unique Needs.",
      url: "/services-details",
      delay_time: 4,
    },
    {
      title: "High-Quality UI & Mobile Apps",
      desc: "Design and Functionality at Its Best.",
      url: "/services-details",
      delay_time: 6,
    },
    {
      title: "AI & ML Models & NLP Solutions",
      desc: "Innovating with Intelligence.",
      url: "/services-details",
      delay_time: 8,
    },
  ];

  return (
    <section className="services-area pt-35 pb-95">
      <div className="container">
        <div className="row justify-content-center">
          {services_area_list.map((item, index) => (
            <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
              <ServicesAreaItem index={index} item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesArea;
