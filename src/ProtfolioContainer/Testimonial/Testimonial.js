import React from "react";
import Footer from "../Home/Footer/Footer";
import Reviewer from "./Reviewer/Reviewer";
import "./Testimonial.css";
export default function Testimonial() {
  return (
    <div className="testimonial-container">
      <div className="testimonial-content">
        <div className="heading-container">
          <div className="heading-text">
            <span>Testimonial</span>
          </div>
          <div className="sub-heading">What my client say about my work</div>
          <div className="heading-separator">
            <div className="separator-line"></div>
            <div className="separator-blob">
              <div></div>
            </div>
          </div>
        </div>
        <div className="testimonial-card-section">
          <div className="review-slider">
            <Reviewer />
          </div>
          <div className="blur-back">
            <div className="footerImage">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
