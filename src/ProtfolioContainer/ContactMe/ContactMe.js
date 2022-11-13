import React from "react";
import Typical from "react-typical";
import "./ContactMe.css";
import ContactMeForm from "./ContactMeForm/ContactMeForm";

export default function ContactMe() {
  return (
    <div className="contact-me-container">
      <div className="contact-me-parent">
        {/* heading conatiner */}
        <div className="heading-container">
          <div className="heading-text">
            <span>Contact Me</span>
          </div>
          <div className="sub-heading">lets keep in touch</div>
          <div className="heading-separator">
            <div className="separator-line"></div>
            <div className="separator-blob">
              <div></div>
            </div>
          </div>
        </div>
        {/* end heading container */}
        <div className="contact-me-card">
          <div className="contact-me-card-logo">
            <div className="contact-me-header">
              <div className="contact-me-header-text">
                <p className="contact-text">
                  Get In Touch 💌 <span className="sign">|</span>
                </p>
                <div className="colz">
                  <div className="colz-icon">
                    <a href="#">
                      <i className="fa fa-facebook-square"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-google-plus-square"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-youtube-square"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-symble">
              <p className="info-text">Send Your Email Here!</p>
              <div className="info-img">
                <img src={require("../../assets/mailz.jpeg")} />
              </div>
            </div>
          </div>
          <div className="contact-me-card-form">
            <ContactMeForm />
          </div>
        </div>
      </div>
    </div>
  );
}
