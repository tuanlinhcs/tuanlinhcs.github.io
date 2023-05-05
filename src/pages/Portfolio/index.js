import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";

import "./styles/index.scss";

// Import components
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Jobs from "./components/jobs";
import Projects from "./components/projects";
import Blogs from "./components/blogs";
import Contact from "./components/contact";
import Footer from "./components/footer";
import SideBar from "./components/sidebar";

import { ScrollAnimate } from "components/animate/ScrollAnimate";

function Portfolio() {
  ReactGA.pageview("/portfolio-brittanychiang");

  useEffect(() => {
    ScrollAnimate("about", "animate-fade-in");
    ScrollAnimate("experience", "animate-fade-in");
    ScrollAnimate("projects", "animate-fade-in");
    ScrollAnimate("blogs", "animate-fade-in");
    ScrollAnimate("contact", "animate-fade-in");
  });
  return (
    <div className="Portfolio-Brittanychiang">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tuan Le</title>
      </Helmet>
      <div className="layout">
        <Navbar />
        <div className="container">
          <div className="parts-container">
            <Hero />
            <About />
            <Jobs />
            <Projects />
            <Blogs />
            <Contact />
            <Footer />
          </div>
        </div>
        <SideBar />
      </div>
    </div>
  );
}

export default Portfolio;
