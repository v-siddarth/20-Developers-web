import React from "react";
import SlickSlider from "../SlickSlider/SlickSlider";
import TestimonialAreaItem from "./TestimonialAreaItem";
import $ from "jquery";
import { doAnimations } from "../../lib/helpers";
import cn from "classnames";

const TestimonialArea = () => {
  const slick_settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    // autoplay: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    beforeChange: function (currentSlide, nextSlide) {
      var $animatingElements = $(
        '.single-slider[data-slick-index="' + nextSlide + '"]'
      ).find("[data-animation]");
      doAnimations($animatingElements);
    },
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const slider_items = [
    {
      title: "Mr. Saurabh Singh",
      designation: "Co Founder, The Cover House.",
      desc: `20s Developers transformed our vision into a seamless digital platform. Their attention to detail and innovative solutions have set us apart in our industry, enhancing both our user experience and brand identity.`,
      src: 1,
    },
    {
      title: "Mr. Marwan Faleh Alsulami",
      designation: "MAR Football, Saudi Arabia",
      desc: `The app and website 20s Developers built for us exceeded our expectations. Their expertise in creating user-friendly interfaces and delivering high-performance solutions made a significant impact on our engagement with football fans.“`,
      src: 2,
    },
    {
      title: "Smt. Sulbha",
      designation: "CEO, Horizin Institute.",
      desc: `The school management app developed by 20s Developers has revolutionized our operations. From seamless administration to enhanced parent-teacher communication, their work has been a game changer for our institute.“`,
      src: 3,
    },
    {
      title: "Mr. Sanny Satekar",
      designation: "CEO, Sanny Audio. ",
      desc: `Partnering with 20s Developers to build our e-commerce platform has transformed how we manage and sell our audio equipment. Their intuitive design and seamless functionality have boosted both our customer engagement and sales.“`,
      src: 1,
    },
    {
      title: "Mr. Om Shivsagar",
      designation: "Ceo, HardwareKart.",
      desc: `20s Developers elevated our marketing efforts with targeted strategies that significantly boosted our brand visibility. Their approach has helped us connect with the right audience in the hardware industry.“`,
      src: 4,
    },
  ];

  return (
    <section className="testimonial-area pt-110 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title text-center mb-60">
              <span className="sub-title">Testimonials</span>
              <h2 className="title">Hear What Our Clients Have to Say About Us</h2>
            </div>
          </div>
        </div>

        <div className="testimonial-item-wrap">
          <div className="row testimonial-active">
            <SlickSlider settings={slick_settings}>
              {slider_items.map((x, index) => (
                <div
                  key={index}
                  className={cn(
                    "col-lg-3",
                    index % 2 === 0 && "testimonial-item-wrap-item-even"
                  )}
                >
                  <TestimonialAreaItem item={x} />
                </div>
              ))}
            </SlickSlider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialArea;
