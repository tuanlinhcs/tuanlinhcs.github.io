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
            <a href="https://www.facebook.com/kleanhtuan/">
              <AiOutlineFacebook className="icon" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/tuan.le48/">
              <FiInstagram className="icon" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/letuan317/">
              <FiLinkedin className="icon" />
            </a>
          </li>
          <li>
            <a href="https://github.com/letuan317">
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
