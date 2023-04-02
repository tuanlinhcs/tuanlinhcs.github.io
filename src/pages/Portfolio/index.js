import React from "react";
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

function Portfolio() {
  ReactGA.pageview("/portfolio-brittanychiang");

  return (
    <div className="Portfolio-Brittanychiang">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tuan Le v2.0.2</title>
      </Helmet>
      <div className="layout">
        <Navbar />
        <div className="container">
          <Hero />
          <About />
          <Jobs />
          <Projects />
          <Blogs />
          <Contact />
        </div>
        <SideBar />
        <Footer />
      </div>
    </div>
  );
}

export default Portfolio;
