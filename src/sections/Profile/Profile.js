import React from "react";
import Typical from "react-typical";
import styled from "styled-components";
import { Facebook,LinkedIn, Instagram,GitHub} from "@material-ui/icons";

export default function Profile() {
  return (
    <AppStyled className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="profile-details-name">
            <span className="primary-text">
              <h1>Hello I'm <span className="highlighted-text">Lawrence</span> </h1>
            </span>
          </div>
          <div className="profile-details-role">
            <div className="primary-text">
              {" "}
              <h2>
                {" "}
                <Typical className="typical"
                  loop={Infinity}
                  steps={[
                    "Enthusiatic Dev 🔴",
                    3000,
                    "Full Stack Developer 💻",
                    3000,
                    "MERN Stack 😎",
                    3000,
                    "React/React-Native Dev 📱",
                    3000,
                  ]}
                />
              </h2>
              <p className="profile-role-tagline">
                Knacking of building applications with front-end and back-end
                operations.
              </p>
            </div>
            <div className="icons">
                <a href="https://www.facebook.com/orock.bessongayim" className="icon i-facebook"> 
                  <Facebook />
                </a>
                <a href="https://www.linkedin.com/in/orock-lawrence-01884a179/" className="icon i-github">
                  <LinkedIn />
                </a>
                <a href="https://www.instagram.com/?hl=en" className="icon i-linkedin">
                  <Instagram />
                </a>
                <a href="https://github.com/Bessonglawrence" className="icon i-instagram">
                  <GitHub />
                </a>
            </div>
          </div>
        </div>

      </div>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  background-color: var( --background-dark-color) ;
  align-items: center;
  justify-content: center;
  //position: relative;
  .profile-details{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate( -50%, -50%);
    text-align: center;
    width: 80%;
  }
  .primary-text{
    flex-direction: row;
  }
  .profile-role-tagline{
    font-size: 1rem;
    padding-bottom: 10px;
  }
  .typical{
    font-size: 1.5rem;
    padding-bottom: 10px;
    color: var(--white-color);
  }
  .icons{
    display: flex;
    justify-content: center;
    .icon{
      border: 1px solid var(--border-color);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      cursor: pointer;
      transition: all .4s ease-in-out;
      &:hover{
        border: 1px solid var(--primary-color);
        color: var(--primary-color);
      }
      &:not(:last-child){
        margin-right: .5rem;
      }
      svg{
        margin: 0.3rem;
      }
    }
  }
`;
