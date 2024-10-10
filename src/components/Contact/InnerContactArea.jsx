import React from "react";
import InnerContactForm from "./InnerContactForm";
import InnerContactInfo from "./InnerContactInfo";

const InnerContactArea = () => {
  return (
    <section className="inner-contact-area">
      <div className="container">
        <div className="inner-contact-wrap">
          <div className="row">
            <div className="col-xl-9 col-lg-10">
              <div className="section-title title-style-two mb-50">
                <h2 className="title">
                  Have a <span>Cool Project?</span> Get in touch!
                </h2>
              </div>

              <div className="inner-contact-form-wrap">
                <InnerContactForm />
              </div>

              <div id="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15089.817750425807!2d73.11272025179821!3d18.999686715025174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e85b5ad38f5b%3A0xf23e1882ef4ef17b!2sNew%20Panvel%20East%2C%20Panvel%2C%20Navi%20Mumbai%2C%20Maharashtra%20410206!5e0!3m2!1sen!2sin!4v1728556333160!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                />

              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15089.817750425807!2d73.11272025179821!3d18.999686715025174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e85b5ad38f5b%3A0xf23e1882ef4ef17b!2sNew%20Panvel%20East%2C%20Panvel%2C%20Navi%20Mumbai%2C%20Maharashtra%20410206!5e0!3m2!1sen!2sin!4v1728556333160!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
              </div>

              <div className="inner-contact-info">
                <InnerContactInfo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerContactArea;
