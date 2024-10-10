import React from "react";
import { Link } from "react-router-dom";

const FooterTwo = () => {
  return (
    <footer>
      <div className="footer-area-two">
        <div className="container">
          <div className="footer-top-two">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8">
                <div className="footer-content-two text-center">
                  <div className="logo">
                    <Link to="/">
                      <img src="/img/logo/20s_logo.png" alt="20s Developers Logo" />
                    </Link>
                  </div>
                  <p>
                    20s Developers is a technology company dedicated to building 
                    innovative digital solutions, from custom websites and mobile 
                    apps to cutting-edge SaaS and PaaS products. Let us help you 
                    grow your business in the digital age.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom-two">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="copyright-text">
                  <p>© 2023, 20s Developers. All rights reserved.</p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="footer-social-two">
                  <ul className="list-wrap">
                    <li className="title">Follow us</li>
                    <li>
                      <a href="https://facebook.com/20sDevelopers" target="_blank" rel="noopener noreferrer">
                        <img src="/img/icon/footer_icon01.png" alt="Facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/20sDevelopers" target="_blank" rel="noopener noreferrer">
                        <img src="/img/icon/footer_icon02.png" alt="Twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://linkedin.com/company/20sDevelopers" target="_blank" rel="noopener noreferrer">
                        <img src="/img/icon/footer_icon03.png" alt="LinkedIn" />
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com/20sDevelopers" target="_blank" rel="noopener noreferrer">
                        <img src="/img/icon/footer_icon04.png" alt="Instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
