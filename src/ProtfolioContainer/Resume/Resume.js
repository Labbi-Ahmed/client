import React from "react";
import "./Resume.css";
import education from "../../assets/Resume/education.svg";

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
                  <span className="bullet-label">Education</span>
                </div>
                <div className="bullet">
                  <img
                    className="bullet-logo"
                    src="Resume-img/programming-skills.svg"
                    alt="logo"
                  />
                  <span className="bullet-label">Education</span>
                </div>
                <div className="bullet">
                  <img
                    className="bullet-logo"
                    src="Resume-img/projects.svg"
                    alt="logo"
                  />
                  <span className="bullet-label">Education</span>
                </div>
                <div className="bullet showBulletpng">
                  <img
                    className="bullet-logo"
                    src="Resume-img/interests.svg"
                    alt="logo"
                  />
                  <span className="bullet-label">Education</span>
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
                      " currently working as mern stake web and mobile"
                    </span>
                  </div>
                  <div className="experience-discription">
                    <span className="resume-discription-text">
                      " -currently working as mern stake web and mobile"
                    </span>
                    <span className="resume-discription-text">
                      " -currently working as mern stake web and mobile"
                    </span>
                    <span className="resume-discription-text">
                      " -currently working as mern stake web and mobile"
                    </span>
                  </div>
                </div>
              </div>
              {/* end work history */}
              {/* programming skills */}
              <div className="resume-screen-container">
                <div className="skill-parent">
                  <div className="heading-bullet"></div>
                  <span>University of Rajshahi</span>
                  <div className="skill-percentage">100000000%</div>
                </div>
                <div className="skill-parent">
                  <div className="heading-bullet"></div>
                  <span>University of Rajshahi</span>
                  <div className="skill-percentage">100000000%</div>
                </div>
                <div className="skill-parent">
                  <div className="heading-bullet"></div>
                  <span>University of Rajshahi</span>
                  <div className="skill-percentage">100000000%</div>
                </div>
                <div className="skill-parent">
                  <div className="heading-bullet"></div>
                  <span>University of Rajshahi</span>
                  <div className="skill-percentage">100000000%</div>
                </div>
                <div className="skill-parent">
                  <div className="heading-bullet"></div>
                  <span>University of Rajshahi</span>
                  <div className="skill-percentage">100000000%</div>
                </div>
                <div className="skill-parent">
                  <div className="heading-bullet"></div>
                  <span>University of Rajshahi</span>
                  <div className="skill-percentage">100000000%</div>
                </div>
                <div className="skill-parent">
                  <div className="heading-bullet"></div>
                  <span>University of Rajshahi</span>
                  <div className="skill-percentage">100000000%</div>
                </div>
                <div className="skill-parent">
                  <div className="heading-bullet"></div>
                  <span>University of Rajshahi</span>
                  <div className="skill-percentage">100000000%</div>
                </div>
              </div>
              {/* end skills */}
              {/* projects */}
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
              {/* end projects */}
              {/* Interest */}
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
              {/* end interest */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
