import "./hero.scss";
import { ButtonPrimaryNewTabLink } from "../ui/buttons";
export default function Hero() {
  return (
    <section className="section-hero">
      <p className="highlight">Hi, my name is</p>
      <h1 className="name">Tuan Le.</h1>
      <h1>I build things for the internet</h1>
      <p>
        As a Full Stack Software Engineer, I possess expertise in developing software solutions, creating websites and building mobile applications. My focus is currently directed towards delivering
        exceptional results in these areas.
      </p>
      <ButtonPrimaryNewTabLink name="Check out my resume!" link="/resume.pdf" />
    </section>
  );
}
