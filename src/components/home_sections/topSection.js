import React, { Component } from "react";
import Logo from "../../assets/images/Logo.png";
import Person from "../../assets/images/person.png";
import "./topSection.css";

class topSection extends Component {
  render() {
    return (
      <div className="topcontainer">
        <div className="logo">
          <img src={Logo} alt="logo"></img>
        </div>
        <div className="infoBx">
          <h4>Hi, There!</h4>
          <h1>Tuan Le</h1>
          <h4>Software & Web Developer </h4>
        </div>
        <div className="picPort">
          <img className="picPort" src={Person} alt="person"></img>
        </div>
      </div>
    );
  }
}
export default topSection;
