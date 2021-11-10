import React from "react";
import Typical from "react-typical";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
              <div className="colz-icon">
                    <a href="https://www.facebook.com/orock.bessongayim">
                    <i className="fa fa-facebook-square"></i>
                    </a>
                    <a href="https://twitter.com/bessongayim">
                    <i className="fa fa-twitter-square"></i>
                    </a>
                    <a href="https://www.instagram.com/">
                    <i className="fa fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/orock-lawrence-01884a179/">
                    <i className="fa fa-linkedin-square"></i>
                    </a>
              </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Lawrence</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiatic Dev 🔴",
                    2000,
                    "Full Stack Developer 💻",
                    2000,
                    "MERN Stack 😎",
                    2000,
                    "React/React-Native Dev 📱",
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knacking of building applications with front-end and back-end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
                  <button className="btn primary-btn">
                    {" "}
                    Hire Me
                  </button>
                  <a href="Lawrence.pdf" download="Lawrence.pdf">
                    <button className="btn highlighted-btn">Get Resumé</button>
                  </a>
          </div>
        </div>
        <div className="profile-picture">
            <div className="profile-picture-background">

            </div>
        </div>
      </div>
    </div>
  );
}
