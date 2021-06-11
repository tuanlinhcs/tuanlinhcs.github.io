import React, { Component } from "react";
import { Element } from "react-scroll";
import "./Home.css";

import TopSection from "./home_sections/topSection";
import HomeNavigation from "./home_sections/homeNavigation";
import AboutSection from "./home_sections/aboutSection";
import ServiceSection from "./home_sections/serviceSection";
import SkillsSection from "./home_sections/skillsSection";
import ContactSection from "./home_sections/contactSection";
import BlogSection from "./home_sections/blogSection";

/*
        
*/

export default class Home extends Component {
  render() {
    return (
      <div>
        <Element name="idTopSection">
          <TopSection></TopSection>
        </Element>
        <HomeNavigation></HomeNavigation>
        <Element name="idAboutSection">
          <AboutSection></AboutSection>
        </Element>
        <Element name="idServiceSection">
          <div className="homeContainer">
            <ServiceSection></ServiceSection>
          </div>
        </Element>
        <Element name="idBlogSection">
          <div
            style={{
              width: "100%",
              background: "#F3E3FD",
              top: "-50px",
              paddingTop: "100px",
            }}
          >
            <div className="homeContainer">
              <BlogSection></BlogSection>
            </div>
          </div>
        </Element>
        <Element name="idSkillsSection">
          <div className="homeContainer">
            <SkillsSection></SkillsSection>
          </div>
        </Element>
        <Element name="idContactSection">
          <div
            style={{
              width: "100%",
              background: "antiquewhite",
            }}
          >
            <div className="homeContainer">
              <ContactSection></ContactSection>
            </div>
          </div>
        </Element>
      </div>
    );
  }
}
