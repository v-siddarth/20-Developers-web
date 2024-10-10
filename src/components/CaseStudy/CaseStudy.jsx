import React from "react";
import CaseStudyItem from "./CaseStudyItem";
// import { Link } from "react-router-dom";

const CaseStudy = () => {
  const studies = [
    {
      colClassName: "col-lg-4 col-md-6",
      src: "/img/project/inner_project01.jpg",
      url: "/project-details",
      title: "E-Commerce Website Development",
      desc: "Built a robust e-commerce platform for Sanny Audio, enabling streamlined product sales and increased customer engagement.",
    },
    {
      colClassName: "col-lg-4 col-md-6",
      src: "/img/project/inner_project02.jpg",
      url: "/project-details",
      title: "Insurance Website & Marketing",
      desc: "Developed a complete website and marketing strategy for The Cover House Insurance Agency, enhancing their online presence.",
    },
    {
      colClassName: "col-lg-4 col-md-6",
      src: "/img/project/inner_project03.jpg",
      url: "/project-details",
      title: "Mobile App for Mar Football",
      desc: "Created a mobile app for Mar Football, integrating payment methods and providing custom mobile wallpapers.",
    },
    {
      colClassName: "col-lg-8 col-md-6",
      src: "/img/project/inner_project04.jpg",
      url: "/project-details",
      title: "InterviewX AI Simulation",
      desc: "Developed an AI-powered interview simulation platform using advanced technologies like React, Vite, and Firebase.",
    },
    {
      colClassName: "col-lg-4 col-md-6",
      src: "/img/project/inner_project05.jpg",
      url: "/project-details",
      title: "Custom ERP Solutions",
      desc: "Designed and implemented custom ERP solutions to optimize business processes for a diverse range of industries.",
    },
    {
      colClassName: "col-lg-6 col-md-6",
      src: "/img/project/inner_project06.jpg",
      url: "/project-details",
      title: "SaaS & PaaS Development",
      desc: "Launched multiple innovative SaaS and PaaS products, enhancing business scalability and operational efficiency.",
    },
    {
      colClassName: "col-lg-6 col-md-6",
      src: "/img/project/inner_project07.jpg",
      url: "/project-details",
      title: "Portfolio & Personal Websites",
      desc: "Developed custom personal portfolios and websites for professionals, showcasing their expertise and work.",
    },
  ];

  return (
    <section className="inner-project-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title text-center mb-65">
              <h2 className="title">Case Studies</h2>
              <p>
                Explore our successful projects across various industries, including e-commerce, insurance, mobile apps, and custom software solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="inner-project-item-wrap">
          <div className="row justify-content-center">
            {studies.map((x, index) => (
              <CaseStudyItem key={index} item={x} />
            ))}
          </div>

          {/* <div className="more-btn text-center mt-45">
            <Link to="/case-studies" className="btn">
              Load More <span></span>
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
