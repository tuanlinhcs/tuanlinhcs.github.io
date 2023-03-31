import "./nav01.scss";

import Logo from "assets/images/logo.png";
export default function Nav01() {
  return (
    <nav className="nav01">
      <div className="container-logo">
        <img src={Logo} alt="logo" />
        <h1>Tuan Le</h1>
      </div>
      <div className="container-links">
        <ul>
          <a href="/">
            <li>Home</li>
          </a>
          <a href="/blogs">
            <li>Blogs</li>
          </a>
          <a href="/projects">
            <li>Projects</li>
          </a>
        </ul>
      </div>
    </nav>
  );
}
