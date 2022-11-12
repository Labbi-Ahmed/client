import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="about-me-parent">
        {/* heading conatiner */}
        <div className="heading-container">
          <div className="heading-text">
            <span>About Me</span>
          </div>
          <div className="sub-heading">why Choose Me?</div>
          <div className="heading-separator">
            <div className="separator-line"></div>
            <div className="separator-blob">
              <div></div>
            </div>
          </div>
        </div>
        {/* end heading container */}
        {/* start about me card */}
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              Prettier is a code formatter that makes your code look neat and
              consistent. To learn more about Prettier, please visit the website
              here. Below is an easy way to set up Prettier on your VS Code and
              allow automatic formatting.
            </span>
            <div className="about-me-highlight">
              <div className="highlight-heading">
                <span>here are few highlights:</span>
              </div>
              <div className="highlight">
                <div className="highlight-bolb"></div>
                <span>Front end web developer</span>
              </div>
              <div className="highlight">
                <div className="highlight-bolb"></div>
                <span>React </span>
              </div>
              <div className="highlight">
                <div className="highlight-bolb"></div>
                <span>Unity 3d </span>
              </div>
              <div className="highlight">
                <div className="highlight-bolb"></div>
                <span>Oculus Quest VR in Unity</span>
              </div>
              <div className="highlight">
                <div className="highlight-bolb"></div>
                <span>your skill slhow here in a headlign</span>
              </div>
              <div className="highlight">
                <div className="highlight-bolb"></div>
                <span>your skill slhow here in a headlign</span>
              </div>
            </div>
            <div className="about-me-options">
              <button className="btn primary-btn">hire me</button>
              <a href="LabbiCV.pdf" download="Labbi Ahmed LabbiCV.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
        {/* end about card */}
        <div>{/* <img src="logo192.png" /> */}</div>
      </div>
    </div>
  );
}
