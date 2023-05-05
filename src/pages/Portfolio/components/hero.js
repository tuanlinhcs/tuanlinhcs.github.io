import React, { useState, useEffect } from "react";
import "../styles/hero.scss";
import { ButtonPrimaryNewTabLink } from "../ui/buttons";

const majors = ["Web", "Mobile App", "Desktop Application"];

export default function Hero() {
  const [majorIndex, setMajorIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [majorText, setMajorText] = useState("");
  const [forward, setForward] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      if (forward) {
        if (charIndex < majors[majorIndex].length) {
          setMajorText((prevText) => prevText + majors[majorIndex][charIndex]);
          setCharIndex((prevIndex) => prevIndex + 1);
        } else {
          setForward(false);
        }
      } else {
        if (charIndex > 0) {
          setMajorText((prevText) => prevText.slice(0, -1));
          setCharIndex((prevIndex) => prevIndex - 1);
        } else {
          if (majorIndex === majors.length - 1) {
            setMajorIndex(0);
          } else {
            setMajorIndex((prevIndex) => prevIndex + 1);
          }
          setCharIndex(0);
          setMajorText("");
          setForward(true);
        }
      }
    }, 500);

    return () => clearTimeout(delay);
  }, [majorIndex, charIndex, majorText, forward]);

  return (
    <section className="section-hero">
      <p className="highlight">Hi, my name is</p>
      <h1 className="name">Tuan Le.</h1>
      <h1>
        I'm a <span>{majorText}</span> Developer
      </h1>
      <p>
        As a Full Stack Software Engineer, I possess expertise in developing software solutions, creating websites and building mobile applications. My focus is currently directed towards delivering
        exceptional results in these areas.
      </p>
      <ButtonPrimaryNewTabLink name="Check out my resume!" link="/resume.pdf" />
    </section>
  );
}
