import React, { Component } from "react";
import { Link } from "react-scroll";

import "./homeNavigation.css";
import iconArrow from "../../assets/icons/icons8-collapse-arrow-96.png";

export default class homeNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ToggleMenuActive: false,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY <= 545;
      const isAbout = window.scrollY > 545 && window.scrollY <= 800;
      const isService = window.scrollY > 1050 && window.scrollY <= 1700;
      const isResume = window.scrollY > 1700 && window.scrollY <= 2700;
      const isContact = window.scrollY > 2700;
      const nav = document.getElementById("nav");
      const nav_home = document.getElementById("nav_home");
      const nav_about = document.getElementById("nav_about");
      const nav_service = document.getElementById("nav_service");
      const nav_resume = document.getElementById("nav_resume");
      const nav_contact = document.getElementById("nav_contact");
      if (isTop) {
        nav.classList.add("nav");
        nav.classList.remove("scrolled");
      } else {
        nav.classList.add("scrolled");
        nav.classList.remove("nav");
      }
      if (isAbout) {
        nav_home.classList.remove("active");
        nav_about.classList.add("active");
        nav_service.classList.remove("active");
        nav_resume.classList.remove("active");
        nav_contact.classList.remove("active");
      } else if (isService) {
        nav_home.classList.remove("active");
        nav_about.classList.remove("active");
        nav_service.classList.add("active");
        nav_resume.classList.remove("active");
        nav_contact.classList.remove("active");
      } else if (isResume) {
        nav_home.classList.remove("active");
        nav_about.classList.remove("active");
        nav_service.classList.remove("active");
        nav_resume.classList.add("active");
        nav_contact.classList.remove("active");
      } else if (isContact) {
        nav_home.classList.remove("active");
        nav_about.classList.remove("active");
        nav_service.classList.remove("active");
        nav_resume.classList.remove("active");
        nav_contact.classList.add("active");
      } else {
        nav_home.classList.add("active");
        nav_about.classList.remove("active");
        nav_service.classList.remove("active");
        nav_resume.classList.remove("active");
        nav_contact.classList.remove("active");
      }

      /*Mobile*/
      if (document.getElementById("navMobile") !== null) {
        const isTopMobile = window.scrollY <= 500;
        const isAboutMobile = window.scrollY > 500 && window.scrollY <= 1119;
        const isServiceMobile = window.scrollY > 1119 && window.scrollY <= 1522;
        const isResumeMobile = window.scrollY > 1522 && window.scrollY <= 2900;
        const navMobile = document.getElementById("navMobile");
        const navMobile_home = document.getElementById("navMobile_home");
        const navMobile_about = document.getElementById("navMobile_about");
        const navMobile_service = document.getElementById("navMobile_service");
        const navMobile_resume = document.getElementById("navMobile_resume");
        const navMobile_contact = document.getElementById("navMobile_contact");
        if (isTopMobile) {
          navMobile.classList.add("navMobile");
          navMobile.classList.remove("scrolledMobile");
        } else {
          navMobile.classList.add("scrolledMobile");
          navMobile.classList.remove("navMobile");
        }
        if (isAboutMobile) {
          navMobile_home.classList.remove("active");
          navMobile_about.classList.add("active");
          navMobile_service.classList.remove("active");
          navMobile_resume.classList.remove("active");
          navMobile_contact.classList.remove("active");
        } else if (isServiceMobile) {
          navMobile_home.classList.remove("active");
          navMobile_about.classList.remove("active");
          navMobile_service.classList.add("active");
          navMobile_resume.classList.remove("active");
          navMobile_contact.classList.remove("active");
        } else if (isResumeMobile) {
          navMobile_home.classList.remove("active");
          navMobile_about.classList.remove("active");
          navMobile_service.classList.remove("active");
          navMobile_resume.classList.add("active");
          navMobile_contact.classList.remove("active");
        } else if (isContact) {
          navMobile_home.classList.remove("active");
          navMobile_about.classList.remove("active");
          navMobile_service.classList.remove("active");
          navMobile_resume.classList.remove("active");
          navMobile_contact.classList.add("active");
        } else {
          navMobile_home.classList.add("active");
          navMobile_about.classList.remove("active");
          navMobile_service.classList.remove("active");
          navMobile_resume.classList.remove("active");
          navMobile_contact.classList.remove("active");
        }
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }
  render() {
    return (
      <div className="homeNav">
        <div className="nav-direct">
          <Link
            activeClass="active"
            to="idAboutSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <img src={iconArrow} alt="iconArrow"></img>
          </Link>
        </div>
        <div className="nav" id="nav">
          <div className="nav-inline">
            <ul>
              <Link
                activeClass="active"
                to="idTopSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li id="nav_home" className="active">
                  Home
                </li>
              </Link>
              <Link
                activeClass="active"
                to="idAboutSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li id="nav_about">About</li>
              </Link>
              <Link
                activeClass="active"
                to="idServiceSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li id="nav_service">Services</li>
              </Link>
              <Link
                activeClass="active"
                to="idResumeSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li id="nav_resume">Resume</li>
              </Link>
              <Link
                activeClass="active"
                to="idContactSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li id="nav_contact">Contact</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="menuMobile">
          <div
            className={this.state.ToggleMenuActive ? "menuChange" : "menu"}
            onClick={() =>
              this.setState({
                ToggleMenuActive: !this.state.ToggleMenuActive,
              })
            }
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <div className="navMobile">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
            <div
              className={
                this.state.ToggleMenuActive
                  ? "navMobileActive"
                  : "navMobileNotActive"
              }
            >
              <ul>
                <Link
                  activeClass="active"
                  to="idTopSection"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <li id="navMobile_home" className="active">
                    Home
                  </li>
                </Link>
                <Link
                  activeClass="active"
                  to="idAboutSection"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <li id="navMobile_about">About</li>
                </Link>
                <Link
                  activeClass="active"
                  to="idServiceSection"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <li id="navMobile_service">Services</li>
                </Link>
                <Link
                  activeClass="active"
                  to="idResumeSection"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <li id="navMobile_resume">Resume</li>
                </Link>
                <Link
                  activeClass="active"
                  to="idContactSection"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <li id="navMobile_contact">Contact</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
