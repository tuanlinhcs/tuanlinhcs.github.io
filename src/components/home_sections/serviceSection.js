import React, { Component } from "react";
import { Link } from "react-scroll";
import "./serviceSection.css";
import imgWebDesign from "../../assets/images/desktop.png";
import imgUIDesign from "../../assets/images/graphic.png";
import imgSoftwareDev from "../../assets/images/icons8-solidworks-60.png";
import imgMobileAppDev from "../../assets/images/icons8-mobile-60.png";
import imgEmail from "../../assets/images/email.png";
import HireImg from "../../assets/images/hand.png";

export default class ServiceSection extends Component {
  render() {
    return (
      <div className="serviceSection">
        <div className="serviceRow">
          <div className="lineSection"></div>
          <div className="lineSectionContent">
            <div>
              <h5>My Strong Arenas</h5>
            </div>
            <div>
              <h1>Service Offerings</h1>
            </div>
          </div>
        </div>
        <div className="serviceRow">
          <div className="serviceCol">
            <div className="serviceCard serviceCardBg1">
              <div className="serviceImgBox">
                <img src={imgWebDesign} alt="icon"></img>
              </div>
              <div className="serviceContentBox">
                <h5>Web Develop</h5>
              </div>
            </div>
          </div>
          <div className="serviceCol">
            <div className="serviceCard serviceCardBg2">
              <div className="serviceImgBox">
                <img src={imgUIDesign} alt="icon"></img>
              </div>
              <div className="serviceContentBox">
                <h5>UI Design</h5>
              </div>
            </div>
          </div>
          <div className="serviceCol">
            <div className="serviceCard serviceCardBg3">
              <div className="serviceImgBox">
                <img src={imgSoftwareDev} alt="icon"></img>
              </div>
              <div className="serviceContentBox">
                <h5>Software Develop</h5>
              </div>
            </div>
          </div>
          <div className="serviceCol">
            <div className="serviceCard serviceCardBg4">
              <div className="serviceImgBox">
                <img src={imgMobileAppDev} alt="icon"></img>
              </div>
              <div className="serviceContentBox">
                <h5>Mobile App Develop</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="serviceRow">
          <div className="serviceNewProject">
            <div className="serviceImgBoxEmail">
              <img src={imgEmail} alt="icon"></img>
            </div>
            <div className="serviceQuote">
              <h2>Starting New Project?</h2>
              <h5>Get an estimate for the new project</h5>
            </div>

            <Link
              activeClass="active"
              to="idContactSection"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <div className="serviceHireBox">
                <img src={HireImg} alt="hire"></img>
                <p>Hire Me!</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
