import React, { Component } from "react";
import Gist from "react-gist";
import { FaArrowRight } from "react-icons/fa";

import "components/pages.scss";
import PageNav from "components/pageNav";
import {
  RandomFeature01,
  RandomFeature02,
  RandomFeature03,
} from "components/methods";

/*

{
  title:"",
  description: "",
  category:"",
  time: "",
  date: "",
  timestamp:"",
  src:"blog/images/2021/",
  alt: "",
  component: "page_",
  link: "/",
  filepath: "blog/content/2021/.js",
}

export { default as page_ } from "./";

<Route exact path="/" component={pages.page_}
/>

*/

const tags = "";
const title = "";
const timestamp = "";

export default class Page_ extends Component {
  render() {
    return (
      <div className="page">
        <PageNav />
        <div className="pageContainer">
          <div className="header">
            <div className="tags">{tags}</div>
            <div className="title">{title}</div>
            <div className="timestamp">
              <div className="author">Tuan Le </div>on {timestamp}
            </div>
          </div>
          <div className="pageContent">
            <h5></h5>
            <RandomFeature01 />
            <h2></h2>
            <Gist id="cd9e4f9b109d38fff5d3e7a759d9466e" file="prerequisites" />
            <img src={image01} alt="React" />
            <RandomFeature02 />
            <RandomFeature03 />
          </div>
        </div>
      </div>
    );
  }
}
