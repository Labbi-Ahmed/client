import React from "react";
import "./Resume.css";

export default function Resume() {
  return (
    <div className="resume-container">
      <div className="resume-content">
        <div className="heading-container">
          <div className="heading-text">
            <span>Resume</span>
          </div>
          <div className="sub-heading">my formal bio details</div>
          <div className="heading-separator">
            <div className="separator-line"></div>
            <div className="separator-blob">
              <div></div>
            </div>
          </div>
        </div>
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullets-container">
              <div className="bullet-icons"></div>
              <div className="bullets">
                <div className="bullet">
                  <img className="bullet-logo" src="Resume-img/education.svg" />
                  <span className="bullet-label">Education</span>
                </div>
                <div className="bullet">
                  <img
                    className="bullet-logo"
                    src="Resume-img/work-history.svg"
                    alt="logo"
                  />
                  <span className="bullet-label">Wrok History</span>
                </div>
                <div className="bullet">
                  <img
                    className="bullet-logo"
                    src="Resume-img/programming-skills.svg"
                    alt="logo"
                  />
                  <span className="bullet-label">Programming Skills</span>
                </div>
                <div className="bullet">
                  <img
                    className="bullet-logo"
                    src="Resume-img/projects.svg"
                    alt="logo"
                  />
                  <span className="bullet-label">Projects</span>
                </div>
                <div className="bullet showBulletpng">
                  <img
                    className="bullet-logo"
                    src="Resume-img/interests.svg"
                    alt="logo"
                  />
                  <span className="bullet-label">Interest</span>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-bullet-details">
            <div className="resume-details-carousal show-content">
              {/* education  */}
              <div className="resume-screen-container">
                <div className="resume-heading">
                  <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <span>University of Rajshahi</span>
                    <div className="heading-date">2016-2020</div>
                  </div>
                  <div className="resume-sub-heading">
                    <span>
                      bachelor of science computer science and Engineering
                    </span>
                  </div>
                </div>
                <div className="resume-heading">
                  <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <span>University of Rajshahi</span>
                    <div className="heading-date">2016-2020</div>
                  </div>
                  <div className="resume-sub-heading">
                    <span>
                      bachelor of science computer science and Engineering
                    </span>
                  </div>
                </div>
                <div className="resume-heading">
                  <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <span>University of Rajshahi</span>
                    <div className="heading-date">2016-2020</div>
                  </div>
                  <div className="resume-sub-heading">
                    <span>
                      bachelor of science computer science and Engineering
                    </span>
                  </div>
                </div>
              </div>
              {/* end education */}
              {/* Work history */}
              <div className="resume-screen-container">
                <div className="experience-container">
                  <div className="resume-heading">
                    <div className="resume-main-heading">
                      <div className="heading-bullet"></div>
                      <span>Xremerina Tech Inc.</span>
                      <div className="heading-date">2020-2022</div>
                    </div>
                    <div className="resume-sub-heading">
                      <span>Interactive And Simulation Developer</span>
                    </div>
                  </div>
                  <div className="experience-discription">
                    <span className="resume-discription-text">
                      Currently working as Interactive and Simulation Developer
                      with Unity VR
                    </span>
                  </div>
                  <div className="experience-discription points">
                    <span className="resume-discription-text">
                      -create VR Interactive Home.
                    </span>
                    <span className="resume-discription-text">
                      -Implement the interion for the VR/PC/Mobile version with
                      HDRP and URP.
                    </span>
                    <span className="resume-discription-text">
                      -Develop realstic feature on Oculus Quest-2 VR Enviroment
                      for Interior home.
                    </span>
                    <span className="resume-discription-text">
                      -Develop the light feataure on the projects for
                      VR/PC/Mobile.
                    </span>
                  </div>
                </div>
              </div>
              {/* end work history */}
              {/* programming skills */}
              <div className="resume-screen-container">
                <div className="programming-parent">
                  <div className="skill-parent">
                    <div className="heading-bullet"></div>
                    <span>Javascript</span>
                    <div className="skill-percentage">
                      <div className="js"></div>
                    </div>
                  </div>
                  <div className="skill-parent">
                    <div className="heading-bullet"></div>
                    <span>HTML</span>
                    <div className="skill-percentage">
                      <div className="html"></div>
                    </div>
                  </div>
                  <div className="skill-parent">
                    <div className="heading-bullet"></div>
                    <span>CSS</span>
                    <div className="skill-percentage">
                      <div className="css"></div>
                    </div>
                  </div>
                  <div className="skill-parent">
                    <div className="heading-bullet"></div>
                    <span>React JS</span>
                    <div className="skill-percentage">
                      <div className="react-js"></div>
                    </div>
                  </div>
                  <div className="skill-parent">
                    <div className="heading-bullet"></div>
                    <span>MySQL</span>
                    <div className="skill-percentage">
                      <div className="mysql"></div>
                    </div>
                  </div>

                  <div className="skill-parent">
                    <div className="heading-bullet"></div>
                    <span>C</span>
                    <div className="skill-percentage">
                      <div className="c"></div>
                    </div>
                  </div>
                  <div className="skill-parent">
                    <div className="heading-bullet"></div>
                    <span>C++</span>
                    <div className="skill-percentage ">
                      <div className="cpp"></div>
                    </div>
                  </div>
                  <div className="skill-parent">
                    <div className="heading-bullet"></div>
                    <span>Java</span>
                    <div className="skill-percentage">
                      <div className="java"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end skills */}
              {/* projects */}
              <div className="resume-screen-container">
                <div className="resume-heading">
                  <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <span>Personal Portfolio Website</span>
                    <div className="heading-date">2022-2022</div>
                  </div>
                  <div className="resume-sub-heading">
                    <span>Technologies used: React JS, Bootstrap</span>
                    <div className="sort-discription">
                      A Personal portfolio website to showcase all my details
                      mad projects at one place.
                    </div>
                  </div>
                </div>
                <div className="resume-heading">
                  <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <span>
                      <a
                        target="_blank"
                        className="link"
                        href="https://vanilla-js-shopping-cart-labbiahmed.netlify.app/"
                      >
                        E-commarce Shopping-cart
                      </a>
                    </span>
                    <div className="heading-date">2022-2022</div>
                  </div>
                  <div className="resume-sub-heading">
                    <span>
                      Technologies used: HTML, Custom-CSS, Venilla-js,
                      contentful
                    </span>
                    <div className="sort-discription">
                      A E-commarce shopping-cart with the functionalites: add,
                      remove, incremetn, decrement, clearAll. use local storage
                      and contentful server to stor data
                    </div>
                  </div>
                </div>
                <div className="resume-heading">
                  <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <a
                      target="_blank"
                      className="link"
                      href="https://real-estate-website-labbiahmed.netlify.app/"
                    >
                      Real Estate Website
                    </a>
                    <div className="heading-date">2022-2022</div>
                  </div>
                  <div className="resume-sub-heading">
                    <span>
                      Technologies used: HTML, Custom-CSS, Venilla-js,
                      contentful
                    </span>
                    <div className="sort-discription">
                      A real estate demo website making just for practice
                    </div>
                  </div>
                </div>
              </div>
              {/* end projects */}
              {/* Interest */}
              <div className="resume-screen-container">
                {/* <div className="resume-heading">
                  <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <span>University of Rajshahi</span>
                    <div className="heading-date">2016-2020</div>
                  </div>
                  <div className="resume-sub-heading">
                    <span>
                      bachelor of science computer science and Engineering
                    </span>
                  </div>
                </div>
                <div className="resume-heading">
                  <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <span>University of Rajshahi</span>
                    <div className="heading-date">2016-2020</div>
                  </div>
                  <div className="resume-sub-heading">
                    <span>
                      bachelor of science computer science and Engineering
                    </span>
                  </div>
                </div>
                <div className="resume-heading">
                  <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <span>University of Rajshahi</span>
                    <div className="heading-date">2016-2020</div>
                  </div>
                  <div className="resume-sub-heading">
                    <span>
                      bachelor of science computer science and Engineering
                    </span>
                  </div>
                </div> */}
              </div>
              {/* end interest */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
