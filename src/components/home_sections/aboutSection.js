import React, { Component } from "react";
import { Link } from "react-scroll";
import "./aboutSection.css";
import pdfResume from "../../assets/Resume2021.pdf";

import HireImg from "../../assets/images/hand.png";
import DownImg from "../../assets/images/download.png";

export default class topSection extends Component {
  render() {
    return (
      <div className="homeContainer">
        <div className="aboutSection">
          <div className="aboutRow">
            <div className="aboutCol">
              <h1 className="aboutTitle">About my story</h1>
            </div>
            <div className="aboutCol">
              <p>
                Born in Viet Nam in 1992, primarily focus my education on
                software and web development, study at International University
                of Vietnam National University Ho Chi Minh City then continuing
                my eduacation at Contra Costa College. Graduated at San
                Francisco State University in 2019 with Bachelor of Computer
                Science.
              </p>
            </div>
            <div className="aboutCol">
              <div className="aboutSquare">
                <div className="aboutSquareContent">
                  <h1>07</h1>
                </div>
                <div className="aboutSquareContent">
                  <h5>Years of Experience</h5>
                </div>
              </div>
            </div>
            <div className="aboutCol">
              <p>
                I have spent 7 years to focus my attention and interest in
                programing languages. In that time I have expanded my knowledge
                in not only software and web development, but also in the mobile
                and game development. I have always enjoyed being at the leading
                edge of new ideas in technology and user experinence.
              </p>
            </div>
          </div>
          <div className="aboutRowNew">
            <div className="aboutCol"></div>
            <div className="aboutCol">
              <Link
                activeClass="active"
                to="idContactSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <div className="aboutHire">
                  <img src={HireImg} alt="hire"></img>
                  <p>Hire Me!</p>
                </div>
              </Link>
            </div>
            <div className="aboutCol"></div>
            <div className="aboutCol">
              <a href={pdfResume} target="_blank" rel="noopener noreferrer">
                <div className="aboutDownload">
                  <img src={DownImg} alt="download"></img>
                  <p>Download CV</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
