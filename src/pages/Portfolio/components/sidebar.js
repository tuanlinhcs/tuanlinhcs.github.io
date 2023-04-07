import { FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";
import { AiOutlineFacebook } from "react-icons/ai";

export default function SideBar() {
  const handleResumeButtonCLick = () => {
    window.open("mailto:letuan317@gmail.com", "_blank");
  };
  return (
    <div className="sidebar">
      <div className="sidebar-left">
        <ul>
          <li>
            <a href="https://www.facebook.com/kleanhtuan/" aria-label="facebook" target="_blank" rel="noopener noreferrer">
              <AiOutlineFacebook className="icon" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/tuan.le48/" aria-label="instagram" target="_blank" rel="noopener noreferrer">
              <FiInstagram className="icon" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/letuan317/" aria-label="linkedin" target="_blank" rel="noopener noreferrer">
              <FiLinkedin className="icon" />
            </a>
          </li>
          <li>
            <a href="https://github.com/letuan317" aria-label="github" target="_blank" rel="noopener noreferrer">
              <FiGithub className="icon" />
            </a>
          </li>
          <li>
            <div className="sidebar-line"></div>
          </li>
        </ul>
      </div>
      <div className="sidebar-right">
        <p onClick={handleResumeButtonCLick}>letuan317@gmail.com</p>
        <div className="sidebar-line"></div>
      </div>
    </div>
  );
}
