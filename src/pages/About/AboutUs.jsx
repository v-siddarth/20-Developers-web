import React from "react";
import BreadcrumbArea from "../../components/BreadcrumbArea/BreadcrumbArea";
import ConsultationArea from "../../components/Consultation/ConsultationArea";
import CounterAreaThree from "../../components/CounterArea/CounterAreaThree";
import HistoryArea from "../../components/HistoryArea/HistoryArea";
import InnerServicesArea from "../../components/ServicesArea/InnerServicesArea";
import SuccessArea from "../../components/SuccessArea/SuccessArea";
import TestimonialArea from "../../components/Testimonial/TestimonialArea";
import Layout from "../../layouts/Layout";

const AboutUs = () => {
  return (
    <Layout header={1} footer={1} className="" mainClassName="">
      <BreadcrumbArea
        title="About Us"
        subtitle={"About Us"}
        className={"pt-175 pb-140"}
      /> 
      <CounterAreaThree />
      {/* <TeamAreaTwo /> */}
      <ConsultationArea />
      <InnerServicesArea />
      <SuccessArea />
      <HistoryArea />
      <TestimonialArea />
      {/* <BrandAreaTwo className={"pb-120"} /> */}
    </Layout>
  );
};

export default AboutUs;
