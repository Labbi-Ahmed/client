import React from "react";
import "./Reviewer.css";

export default function Reviewer() {
  return (
    <div className="review-container">
      <div className="review-parent">
        <div className="review-text">
          <span>
            This person is awesome and have excilent working experience This
            person is awesome and have excilent working experience This person
            is awesome and have excilent working experience
          </span>
        </div>
        <div className="review-stars">
          <div className="star">a</div>
          <div className="star">a</div>
          <div className="star">a</div>
          <div className="star">a</div>
          <div className="star">a</div>
        </div>
        <div className="review-profile">
          <div className="review-profile-image">
            <img
              className="profile-img"
              src={require("../../../assets/Testimonial/Man.JPG")}
              alt="img not show"
            />
          </div>
          <div className="profile-info">
            <div className="profile-name">Labbi Ahmed</div>
            <div className="profile-title">Software Engineer</div>
          </div>
        </div>
      </div>
    </div>
  );
}
