import React, { Suspense, useState } from "react";
import Logo from "assets/images/logo.png";

import "../styles/navbar.scss";

import { ButtonPrimaryNewTabLink } from "../ui/buttons";
import { ImageSkeleton } from "../ui/images/skeleton";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleBurgerMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      document.getElementById("nav-icon2").classList.add("open");
      document.getElementById("nav-links").classList.add("nav-mobile");
    } else {
      document.getElementById("nav-icon2").classList.remove("open");
      document.getElementById("nav-links").classList.remove("nav-mobile");
    }
  };
  const handleClick = (elementID) => {
    try {
      var element = document.getElementById(elementID);
      element.scrollIntoView({ behavior: "smooth" });
    } catch (error) {}
  };
  return (
    <nav className="nav-portfolio-20230223">
      <div className="nav-logo">
        <Suspense fallback={<ImageSkeleton />}>
          <img src={Logo} alt="logo" />
        </Suspense>
        <h1>Tuan Le</h1>
      </div>
      <div id="nav-icon2" onClick={handleBurgerMenu}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="nav-links" id="nav-links">
        <ol>
          <li onClick={() => handleClick("about")}>
            <a href="/#about">About</a>
          </li>
          <li onClick={() => handleClick("experience")}>
            <a href="/#experience">Experience</a>
          </li>
          <li onClick={() => handleClick("blogs")}>
            <a href="/#blogs">Blogs</a>
          </li>
          <li onClick={() => handleClick("projects")}>
            <a href="/#projects">Projects</a>
          </li>
          <li onClick={() => handleClick("contact")}>
            <a href="/#contact">Contact</a>
          </li>
          <ButtonPrimaryNewTabLink name="Resume" link="/resume.pdf" />
        </ol>
      </div>
    </nav>
  );
}

export default NavBar;
