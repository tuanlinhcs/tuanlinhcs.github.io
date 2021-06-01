import React, { Component } from "react";
import "./skillsSection.css";
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

function FunctionSkillLine(props) {
  const classes = "skillLineBarPercent " + props.classes;
  return (
    <div className="skillLine">
      <div className="skillLineIcon">
        <img src={props.icon} alt="icon"></img>
      </div>
      <div className="skillLineText">
        <h5>{props.skill}</h5>
      </div>
      <div className="skillLineBar">
        <div className="skillLineBarBackground">
          <div className={classes}></div>
        </div>
      </div>
      <div className="skillLineText">
        <h5>{props.percent}</h5>
      </div>
    </div>
  );
}

function FunctionSkillCard(props) {
  return (
    <div className="skillCircleCard">
      <div className="skillCircleBox">
        <div className="skillCirclePercent">
          <svg>
            <circle cx="70" cy="70" r="70"></circle>
            <circle cx="70" cy="70" r="70"></circle>
          </svg>
        </div>

        <div className="skillCirclePercentText">
          <h2>{props.percent}</h2>
        </div>

        <div className="skillCircleCardContent">
          <h2>{props.skill}</h2>
          <img src={props.icon} alt="icon"></img>
        </div>
      </div>
    </div>
  );
}

function FunctionSkillExtra(props) {
  const classesHexagon = "skillHex " + props.classesHexagon;
  const classesImage = "skillExtraImage " + props.classesImage;
  const classesText = "skillExtraText " + props.classesText;
  return (
    <div className={classesHexagon}>
      <div className="skillHexagon">
        <span></span>
      </div>
      <div className={classesImage}>
        <img src={props.icon} alt="icon"></img>
      </div>
      <div className={classesText}>
        <h5>{props.skill}</h5>
      </div>
    </div>
  );
}

export default class skillsSection extends Component {
  render() {
    return (
      <div className="skillsSection">
        <div className="skillsRow">
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

        <div className="skillsContainer">
          <div className="skillsTitle">
            <h1 style={{ color: "#Fe3939" }}>Full Stack Web Development</h1>
          </div>
          <div className="skillsRowLine">
            <FunctionSkillLine
              icon={icon_css}
              skill="CSS"
              classes="skill_css"
              percent="80%"
            />
            <FunctionSkillLine
              icon={icon_html}
              skill="HTML"
              classes="skill_html"
              percent="80%"
            />
            <FunctionSkillLine
              icon={icon_react}
              skill="React"
              classes="skill_react"
              percent="80%"
            />
            <FunctionSkillLine
              icon={icon_javascript}
              skill="Javascript"
              classes="skill_javascript"
              percent="80%"
            />
            <FunctionSkillLine
              icon={icon_nodejs}
              skill="NodeJS"
              classes="skill_nodejs"
              percent="80%"
            />
            <FunctionSkillLine
              icon={icon_php}
              skill="PHP"
              classes="skill_php"
              percent="80%"
            />
            <FunctionSkillLine
              icon={icon_flask}
              skill="Flask"
              classes="skill_flask"
              percent="80%"
            />
          </div>
        </div>

        <div className="skillsContainer">
          <div className="skillsTitle">
            <h1 style={{ color: "#1aaaf2" }}>Programming Language</h1>
          </div>
          <div className="skillsRowCircle">
            <FunctionSkillCard
              skill={"Python"}
              icon={icon_python}
              percent={"90%"}
            />

            <FunctionSkillCard
              skill={"Java"}
              icon={icon_java}
              percent={"90%"}
            />

            <FunctionSkillCard skill={"C++"} icon={icon_cpp} percent={"90%"} />
          </div>
        </div>

        <div className="skillsContainer" style={{ top: "50px" }}>
          <div className="skillsTitle">
            <h1 style={{ color: "#184f03" }}>Extra Skills</h1>
          </div>
          <div className="skillsExtra">
            <FunctionSkillExtra
              icon={icon_firebase}
              skill="Firebase"
              classesHexagon=""
              classesImage="skillExtraImage_r1c1"
              classesText="skillExtraText_r1c1"
            />
            <FunctionSkillExtra
              icon={icon_mongodb}
              skill="MongoDB"
              classesHexagon="skillHexagon_r1c2"
              classesImage="skillExtraImage_r1c2"
              classesText="skillExtraText_r1c2"
            />
            <FunctionSkillExtra
              icon={icon_git}
              skill="Git"
              classesHexagon="skillHexagon_r1c3"
              classesImage="skillExtraImage_r1c3"
              classesText="skillExtraText_r1c3"
            />

            <FunctionSkillExtra
              icon={icon_googlecloud}
              skill="Google Cloud"
              classesHexagon="skillHexagon_r2c1"
              classesImage="skillExtraImage_r2c1"
              classesText="skillExtraText_r2c1"
            />
            <FunctionSkillExtra
              icon={icon_aws}
              skill="AWS"
              classesHexagon="skillHexagon_r2c2"
              classesImage="skillExtraImage_r2c2"
              classesText="skillExtraText_r2c2"
            />
            <FunctionSkillExtra
              icon={icon_heroku}
              skill="Heroku"
              classesHexagon="skillHexagon_r2c3"
              classesImage="skillExtraImage_r2c3"
              classesText="skillExtraText_r2c3"
            />

            <FunctionSkillExtra
              icon={icon_mysql}
              skill="MySQL"
              classesHexagon="skillHexagon_r3c4"
              classesImage="skillExtraImage_r3c4"
              classesText="skillExtraText_r3c4"
            />
          </div>
        </div>
      </div>
    );
  }
}
