import "../styles/about.scss";
import IMG_me from "assets/images/me.png";

export default function About() {
  const year_experience = new Date().getFullYear() - 2017;

  return (
    <section className="section-about" id="about">
      <div className="col-50">
        <header>About Me</header>
        <p>
          Hello and welcome to my portfolio! My name is <span className="highlight">Tuan Le</span> and I am a software engineer with <span className="highlight">{year_experience}</span> years of
          experience in the field.
        </p>
        <p>
          As a software engineer, I am passionate about creating innovative solutions to complex problems. I have experience with a wide range of programming languages and frameworks, including
          Python, React, Javascript, CSS, SCSS and HTML. Additionally, I am skilled in database design, testing, and project management. In my portfolio, you will find examples of some of the projects
          that I have worked on throughout my career. Each project showcases my skills in software development, problem-solving, and collaboration.
        </p>
        <p>
          I am constantly seeking new challenges and opportunities to learn and grow as a software engineer. If you are interested in working with me or learning more about my experience, please don't
          hesitate to reach out.
        </p>
        <p>Here are a few technologies I’ve been working with recently:</p>
        <ul>
          <li className="li-format">Python</li>
          <li className="li-format">React</li>
          <li className="li-format">Javascript</li>
          <li className="li-format">React Native</li>
          <li className="li-format">CSS</li>
          <li className="li-format">SCSS</li>
          <li className="li-format">HTML</li>
        </ul>
        <p>Thank you for visiting my portfolio!</p>
      </div>
      <div className="col-50">
        <div className="author-image">
          <div className="image-frame"></div>
          <img src={IMG_me} alt="Tuan Le" />
        </div>
      </div>
    </section>
  );
}
