import React, { Component } from "react";
import { Link } from "react-scroll";
import { slide as Menu } from "react-burger-menu";

import "./homeNavigation.css";
import iconArrow from "../../assets/icons/icons8-collapse-arrow-96.png";

function scrollHomeNav() {
  window.addEventListener("scroll", () => {
    const isTop = window.scrollY < 400;
    const isAbout = window.scrollY > 400 && window.scrollY < 800;
    const isService = window.scrollY > 800 && window.scrollY < 1380;
    const isResume = window.scrollY > 1380 && window.scrollY < 2650;
    const isContact = window.scrollY > 2650;
    const nav = document.getElementById("homeNav");
    const nav_home = document.getElementById("homeNav_home");
    const nav_about = document.getElementById("homeNav_about");
    const nav_service = document.getElementById("homeNav_service");
    const nav_skills = document.getElementById("homeNav_skills");
    const nav_contact = document.getElementById("homeNav_contact");
    if (isTop) {
      nav.classList.add("homeNav");
      nav.classList.remove("homeScrolled");
    } else {
      nav.classList.add("homeScrolled");
      nav.classList.remove("homeNav");
    }
    if (isAbout) {
      nav_home.classList.remove("active");
      nav_about.classList.add("active");
      nav_service.classList.remove("active");
      nav_skills.classList.remove("active");
      nav_contact.classList.remove("active");
    } else if (isService) {
      nav_home.classList.remove("active");
      nav_about.classList.remove("active");
      nav_service.classList.add("active");
      nav_skills.classList.remove("active");
      nav_contact.classList.remove("active");
    } else if (isResume) {
      nav_home.classList.remove("active");
      nav_about.classList.remove("active");
      nav_service.classList.remove("active");
      nav_skills.classList.add("active");
      nav_contact.classList.remove("active");
    } else if (isContact) {
      nav_home.classList.remove("active");
      nav_about.classList.remove("active");
      nav_service.classList.remove("active");
      nav_skills.classList.remove("active");
      nav_contact.classList.add("active");
    } else {
      nav_home.classList.remove("active");
      nav_about.classList.remove("active");
      nav_service.classList.remove("active");
      nav_skills.classList.remove("active");
      nav_contact.classList.remove("active");
    }
  });
}

export default class homeNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ToggleMenuActive: false,
      menuOpen: false,
    };
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false });
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu() {
    this.setState((state) => ({ menuOpen: !state.menuOpen }));
  }

  componentDidMount() {
    scrollHomeNav();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }
  render() {
    return (
      <div>
        <div className="homeNav">
          <div className="homeNav-direct">
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
          <div className="homeNav" id="homeNav">
            <div className="homeNavContainer">
              <ul>
                <Link
                  activeClass="active"
                  to="idTopSection"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <li id="homeNav_home">Home</li>
                </Link>
                <Link
                  activeClass="active"
                  to="idAboutSection"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <li id="homeNav_about">About</li>
                </Link>
                <Link
                  activeClass="active"
                  to="idServiceSection"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <li id="homeNav_service">Services</li>
                </Link>
                <Link
                  activeClass="active"
                  to="idSkillsSection"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <li id="homeNav_skills">Skills</li>
                </Link>
                <Link
                  activeClass="active"
                  to="idContactSection"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <li id="homeNav_contact">Contact</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>

        <div className="homeNavMobile">
          <Menu
            right
            isOpen={this.state.menuOpen}
            onStateChange={(state) => this.handleStateChange(state)}
          >
            <Link
              activeClass="active"
              to="idTopSection"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => this.closeMenu()}
              style={{
                textDecoration: "none",
                color: "white",
                cursor: "pointer",
              }}
            >
              Home
            </Link>
            <Link
              activeClass="active"
              to="idAboutSection"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => this.closeMenu()}
              style={{
                textDecoration: "none",
                color: "white",
                cursor: "pointer",
              }}
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="idServicesSection"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => this.closeMenu()}
              style={{
                textDecoration: "none",
                color: "white",
                cursor: "pointer",
              }}
            >
              Services
            </Link>
            <Link
              activeClass="active"
              to="idSkillsSection"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => this.closeMenu()}
              style={{
                textDecoration: "none",
                color: "white",
                cursor: "pointer",
              }}
            >
              Skills
            </Link>
            <Link
              activeClass="active"
              to="idContactSection"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => this.closeMenu()}
              style={{
                textDecoration: "none",
                color: "white",
                cursor: "pointer",
              }}
            >
              Contact
            </Link>

            <div onClick={() => this.toggleMenu()}></div>
          </Menu>
        </div>
      </div>
    );
  }
}
