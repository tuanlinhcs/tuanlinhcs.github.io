import React, { Suspense } from "react";
import { ImageSkeleton } from "../ui/images/skeleton";

import ProjectsDB from "data/projects";
import ToolsDB from "data/tools";

import "../styles/projects.scss";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { ButtonPrimaryNewTabLink } from "../ui/buttons";

function ProjectTheme({ project, type }) {
  const handleClickLink = (link) => {
    if (link === "") {
      return;
    }
    window.open(link, "_blank");
  };
  return (
    <div className={"project-theme type-" + type}>
      <div className="image-container">
        <Suspense fallback={<ImageSkeleton />}>
          <img src={project.imageURl} alt={project.name} />
        </Suspense>
      </div>
      <div className="project-info">
        <h3>{project.type} Project</h3>
        <h1>
          <a href={project.link} target="_blank" rel="noreferrer">
            {project.name}
          </a>
        </h1>
        <div className="box">
          <p>{project.description}</p>
        </div>
        <div className="tags">
          {project.tags.map((tag, idx) => (
            <span key={idx}>{tag}</span>
          ))}
        </div>
        <div className="links">
          <div className="link">
            {project.github === "" ? "" : <FiGithub className="icon" onClick={() => handleClickLink(project.github)} />}
            <FiExternalLink className="icon" onClick={() => handleClickLink(project.link)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="section-projects" id="projects">
      <header>Some Things I’ve Built</header>
      <div className="container-center">
        <Tools />
      </div>
      {ProjectsDB.map((project, idx) => {
        return idx % 2 === 0 ? <ProjectTheme project={project} type={"right"} key={idx} /> : <ProjectTheme project={project} type={"left"} key={idx} />;
      })}
      <div className="container-center">
        <ButtonPrimaryNewTabLink name="See More Projects" link="/projects" />
      </div>
    </section>
  );
}

function Tools() {
  return (
    <div className="tools-container">
      <h3>Here are some tools ready to use for your next projects.</h3>
      <div className="container">
        {ToolsDB.map((tool, idx) => {
          return (
            <a href={tool.link}>
              <div className="tool">
                <div className="icon-container">
                  <img src={tool.icon} alt="icon" className="tool-icon" />
                </div>
                <h3>{tool.name}</h3>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
