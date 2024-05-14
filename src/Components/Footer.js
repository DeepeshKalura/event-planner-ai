import React from "react";

import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper bg-[#F6E2C0]">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src=" "alt="" />
        </div>
        <div className="footer-icons flex flex-wrap">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qualtiy</span>
          <span>Help</span>
          <span>Share</span>
          <span>Carrers</span>
          <span>Testimonials</span>
          
        </div>
        <div className="footer-section-columns">
          <span>244-5333-7783</span>
          <span>hello@hello.com</span>
          <span>press@hello.com</span>
          <span>contact@hello.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
