import React, { Component } from "react";
import "./contactSection.css";

import iconGmail from "../../assets/icons/contact/icons8-gmail-128.png";
import iconLinkedin from "../../assets/icons/contact/icons8-linkedin-128.png";
import iconFacebook from "../../assets/icons/contact/icons8-facebook-128.png";
import iconFreelancer from "../../assets/icons/contact/freelancer.png";
import iconFiverr from "../../assets/icons/contact/icons8-fiverr-100.png";
import iconUpwork from "../../assets/icons/contact/icon-upwork.png";

function FuntionSocialItem(props) {
  return (
    <a href={props.redirect} target="_blank" rel="noopener noreferrer">
      <div className="contactBox">
        <div className="contactBoxImage">
          <img src={props.icon} alt="icon"></img>
        </div>
        <div className="contactBoxText">
          <h5>{props.text}</h5>
        </div>
      </div>
    </a>
  );
}

function ContactForm() {
  return (
    <iframe
      title="Contact Form"
      src="https://docs.google.com/forms/d/e/1FAIpQLSeag1vIU-XW4Od32IkEL79mGcr_xkz5IdAvni53CaBJ7ul2CQ/viewform?embedded=true"
      width="100%"
      height="750"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
    >
      Loading…
    </iframe>
  );
}

export default class ContactSection extends Component {
  render() {
    return (
      <div className="contactSection">
        <div className="contactContainer">
          <div className="contactRow">
            <div className="lineSection"></div>
            <div className="lineSectionContent">
              <div>
                <h5>For Project inquiry and information</h5>
              </div>
              <div>
                <h1>Contact Me</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="contactContainer">
          <div className="contactRowSocial">
            <FuntionSocialItem
              redirect="mailto:letuan317@gmail?subject=New Project"
              icon={iconGmail}
              text="letuan317@gmail.com"
            />
            <FuntionSocialItem
              redirect="https://www.linkedin.com/in/letuan317/"
              icon={iconLinkedin}
              text="linkedin.com/in/letuan317"
            />
            <FuntionSocialItem
              redirect="https://www.facebook.com/kleanhtuan"
              icon={iconFacebook}
              text="facebook.com/kleanhtuan"
            />
          </div>
          <div className="contactRowSocial">
            <FuntionSocialItem
              redirect="https://www.freelancer.com/get/letuan317?f=give"
              icon={iconFreelancer}
              text="freelancer/@letuan317"
            />
            <FuntionSocialItem
              redirect="https://www.fiverr.com/letuan317"
              icon={iconFiverr}
              text="fiverr/@letuan317"
            />
            <FuntionSocialItem
              redirect="https://www.upwork.com/o/profiles/users/~019e2c9a338b48193c/"
              icon={iconUpwork}
              text="upWork/@Tuan L."
            />
          </div>
        </div>

        <div className="contactContainer">
          <ContactForm></ContactForm>
        </div>
      </div>
    );
  }
}
