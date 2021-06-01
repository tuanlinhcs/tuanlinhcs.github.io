import React, { Component } from "react";
import "./contactSection.css";

import iconGmail from "../../assets/icons/contact/icons8-gmail-128.png";
import iconLinkedin from "../../assets/icons/contact/icons8-linkedin-128.png";
import iconFacebook from "../../assets/icons/contact/icons8-facebook-128.png";

export default class ContactSection extends Component {
  render() {
    return (
      <div className="homeContainer">
        <div className="contactSection">
          <div className="ccontainer">
            <div className="crow">
              <div className="ccol-sm"></div>
              <div className="ccol-lm">
                <div>
                  <h5>For Project inquiry and information</h5>
                </div>
                <div>
                  <h1>Contact Me</h1>
                </div>
              </div>
            </div>
            <div className="crow">
              <div className="crow-social">
                <a href="mailto:letuan317@gmail?subject=New Project">
                  <div className="box">
                    <h5>
                      <img src={iconGmail} alt="gmail"></img>letuan317@gmail.com
                    </h5>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/letuan317/">
                  <div className="box">
                    <h5>
                      <img src={iconLinkedin} alt="linkedin"></img>
                      linkedin.com/in/letuan317
                    </h5>
                  </div>
                </a>
                <a href="https://www.facebook.com/kleanhtuan">
                  <div className="box">
                    <h5>
                      <img src={iconFacebook} alt="facebook"></img>
                      facebook.com/kleanhtuan
                    </h5>
                  </div>
                </a>
              </div>
              <div className="crow-social">
                <a href="https://www.freelancer.com/get/letuan317?f=give">
                  <div className="box box-extend">
                    <div class="module-border-wrap">
                      <div class="module">Freelancer</div>
                    </div>
                    <h5>@letuan317</h5>
                  </div>
                </a>
                <a href="https://www.fiverr.com/letuan317">
                  <div className="box box-extend">
                    <div class="module-border-wrap">
                      <div class="module">Fiverr</div>
                    </div>
                    <h5> @letuan317</h5>
                  </div>
                </a>
                <a href="https://www.upwork.com/o/profiles/users/~019e2c9a338b48193c/">
                  <div className="box box-extend">
                    <div class="module-border-wrap">
                      <div class="module">UpWork</div>
                    </div>
                    <h5> @Tuan L.</h5>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
