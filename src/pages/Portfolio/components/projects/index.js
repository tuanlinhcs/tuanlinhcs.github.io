import ProjectsDB from "data/projects";
import "./projects.scss";
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
    <div className={"project-theme type-" + type} id="projects">
      <div className="image-container">
        <img src={project.imageURl} alt={project.name} />
      </div>
      <div className="project-info">
        <h3>{project.type} Project</h3>
        <h1>{project.name}</h1>
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
            <FiGithub className="icon" onClick={() => handleClickLink(project.github)} />
            <FiExternalLink className="icon" onClick={() => handleClickLink(project.link)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="section-projects">
      <header>Some Things I’ve Built</header>
      {ProjectsDB.map((project, idx) => {
        return idx % 2 === 0 ? <ProjectTheme project={project} type={"right"} key={idx} /> : <ProjectTheme project={project} type={"left"} key={idx} />;
      })}
      <div className="container-center">
        <ButtonPrimaryNewTabLink name="See More Projects" link="/projects" />
      </div>
    </section>
  );
}
