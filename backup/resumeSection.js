import React, { Component } from "react";
import "./resumeSection.css";
import icon_css from "../../assets/icons/web-development/icons8-css3-48.png";
import icon_html from "../../assets/icons/web-development/icons8-html-5-48.png";
import icon_react from "../../assets/icons/web-development/icons8-react-native-64.png";
import icon_javascript from "../../assets/icons/web-development/icons8-javascript-48.png";
import icon_nodejs from "../../assets/icons/web-development/icons8-nodejs-48.png";
import icon_php from "../../assets/icons/web-development/icons8-php-logo-80.png";
import icon_flask from "../../assets/icons/web-development/flask-python.png";
import icon_python from "../../assets/icons/web-development/icons8-python-48.png";
import icon_java from "../../assets/icons/web-development/icons8-java-480.png";
import icon_cpp from "../../assets/icons/web-development/icons8-c++-48.png";
import icon_mysql from "../../assets/icons/web-development/icons8-mysql-logo-100.png";
import icon_mongodb from "../../assets/icons/web-development/icons8-mongodb-144.png";
import icon_firebase from "../../assets/icons/web-development/icons8-firebase-144.png";
import icon_heroku from "../../assets/icons/web-development/icons8-heroku-144.png";
import icon_git from "../../assets/icons/web-development/icons8-git-150.png";
import icon_googlecloud from "../../assets/icons/web-development/icons8-google-cloud-platform-144.png";
import icon_aws from "../../assets/icons/web-development/icons8-amazon-web-services-144.png";

function FunctionResumeSkillLine(props) {
  return (
    <div className="resumeSkillLine">
      <div className="resumeSkillLineIcon">
        <img src={props.icon} alt="iconCss"></img>
      </div>
      <div className="resumeSkillLineText">
        <h5>{props.skill}</h5>
      </div>
      <div className="resumeSkillLineBar">
        <div className="resumeSkillLineBarBackground">
          <div className={props.classes}></div>
        </div>
      </div>
      <div className="resumeSkillLineText">
        <h5>{props.percent}</h5>
      </div>
    </div>
  );
}

function FunctionResumeSkillCard(props) {
  return (
    <div className="resumeSkillCircleCard">
      <div className="resumeSkillCircleBox">
        <div className="resumeSkillCirclePercent">
          <svg>
            <circle cx="70" cy="70" r="70"></circle>
            <circle cx="70" cy="70" r="70"></circle>
          </svg>
        </div>

        <div className="resumeSkillCirclePercentText">
          <h2>{props.percent}</h2>
        </div>

        <div className="resumeSkillCircleCardContent">
          <h2>{props.skill}</h2>
          <img src={props.icon} alt="iconPython"></img>
        </div>
      </div>
    </div>
  );
}

function FunctionResumeExtraSkill(props) {
  const classesHexagon = "resumeHex " + props.classesHexagon;
  const classesImage = "resumeExtraSkillImage " + props.classesImage;
  const classesText = "resumeExtraSkillText " + props.classesText;
  return (
    <div className={classesHexagon}>
      <div className="resumeHexagon">
        <span></span>
      </div>
      <div className={classesImage}>
        <img src={props.icon} alt="iconExtraSkill"></img>
      </div>
      <div className={classesText}>
        <h5>{props.skill}</h5>
      </div>
    </div>
  );
}

export default class ResumeSection extends Component {
  render() {
    return (
      <div className="homeContainer">
        <div className="resumeSection">
          <div className="resumeRow">
            <div className="lineSection"></div>
            <div className="lineSectionContent">
              <div>
                <h5>My Strong Arenas</h5>
              </div>
              <div>
                <h1>Knowledge And Skills</h1>
              </div>
            </div>
          </div>

          <div className="resumeContainer">
            <div className="resumeTitle">
              <h1 style={{ color: "#Fe3939" }}>Full Stack Web Development</h1>
            </div>
            <div className="resumeRowSkillsLine">
              <FunctionResumeSkillLine
                icon={icon_css}
                skill="CSS"
                classes="resumeSkillLineBarPercent resumeSkill_css"
                percent="80%"
              />
              <FunctionResumeSkillLine
                icon={icon_html}
                skill="HTML"
                classes="resumeSkillLineBarPercent resumeSkill_html"
                percent="80%"
              />
              <FunctionResumeSkillLine
                icon={icon_react}
                skill="React"
                classes="resumeSkillLineBarPercent resumeSkill_react"
                percent="80%"
              />
              <FunctionResumeSkillLine
                icon={icon_javascript}
                skill="Javascript"
                classes="resumeSkillLineBarPercent resumeSkill_javascript"
                percent="80%"
              />
              <FunctionResumeSkillLine
                icon={icon_nodejs}
                skill="NodeJS"
                classes="resumeSkillLineBarPercent resumeSkill_nodejs"
                percent="80%"
              />
              <FunctionResumeSkillLine
                icon={icon_php}
                skill="PHP"
                classes="resumeSkillLineBarPercent resumeSkill_php"
                percent="80%"
              />
              <FunctionResumeSkillLine
                icon={icon_flask}
                skill="Flask"
                classes="resumeSkillLineBarPercent resumeSkill_flask"
                percent="80%"
              />
            </div>
          </div>

          <div className="resumeContainer">
            <div className="resumeTitle">
              <h1 style={{ color: "#1aaaf2" }}>Programming Language</h1>
            </div>
            <div className="resumeRowSkillsCircle">
              <FunctionResumeSkillCard
                skill={"Python"}
                icon={icon_python}
                percent={"90%"}
              />

              <FunctionResumeSkillCard
                skill={"Java"}
                icon={icon_java}
                percent={"90%"}
              />

              <FunctionResumeSkillCard
                skill={"C++"}
                icon={icon_cpp}
                percent={"90%"}
              />
            </div>
          </div>

          <div className="resumeContainer" style={{ top: "50px" }}>
            <div className="resumeTitle">
              <h1 style={{ color: "#184f03" }}>Extra Skills</h1>
            </div>
            <div className="resumeExtraSkills">
              <FunctionResumeExtraSkill
                icon={icon_firebase}
                skill="Firebase"
                classesHexagon=""
                classesImage="resumeExtraSkillImage_r1c1"
                classesText="resumeExtraSkillText_r1c1"
              />
              <FunctionResumeExtraSkill
                icon={icon_mongodb}
                skill="MongoDB"
                classesHexagon="resumeHexagon_r1c2"
                classesImage="resumeExtraSkillImage_r1c2"
                classesText="resumeExtraSkillText_r1c2"
              />
              <FunctionResumeExtraSkill
                icon={icon_git}
                skill="Git"
                classesHexagon="resumeHexagon_r1c3"
                classesImage="resumeExtraSkillImage_r1c3"
                classesText="resumeExtraSkillText_r1c3"
              />

              <FunctionResumeExtraSkill
                icon={icon_googlecloud}
                skill="Google Cloud"
                classesHexagon="resumeHexagon_r2c1"
                classesImage="resumeExtraSkillImage_r2c1"
                classesText="resumeExtraSkillText_r2c1"
              />
              <FunctionResumeExtraSkill
                icon={icon_aws}
                skill="AWS"
                classesHexagon="resumeHexagon_r2c2"
                classesImage="resumeExtraSkillImage_r2c2"
                classesText="resumeExtraSkillText_r2c2"
              />
              <FunctionResumeExtraSkill
                icon={icon_heroku}
                skill="Heroku"
                classesHexagon="resumeHexagon_r2c3"
                classesImage="resumeExtraSkillImage_r2c3"
                classesText="resumeExtraSkillText_r2c3"
              />

              <FunctionResumeExtraSkill
                icon={icon_mysql}
                skill="MySQL"
                classesHexagon="resumeHexagon_r3c4"
                classesImage="resumeExtraSkillImage_r3c4"
                classesText="resumeExtraSkillText_r3c4"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
