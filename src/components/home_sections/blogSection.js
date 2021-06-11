import React, { Component } from "react";
import "components/home_sections/blogSection.css";
import { contentDB } from "blog/contentDatabase";

import Image01 from "blog/images/2021/test.png";

function CardItem(props) {
  return (
    <>
      <div className="blogCard">
        <img src={Image01} alt={props.alt} />
        <div className="blogCardContent">
          <p>{props.category}</p>
          <h5>{props.title}</h5>
          <a href={props.link}>View Details</a>
        </div>
      </div>
    </>
  );
}

export default function BlogSection() {
  var count = 0;
  return (
    <>
      <div className="blogSection">
        <div className="blogRow">
          <div className="lineSection"></div>
          <div className="lineSectionContent">
            <div>
              <h5>My Strong Arenas</h5>
            </div>
            <div>
              <h1>Blog</h1>
            </div>
          </div>
        </div>
        <div className="blogRow">
          <ul>
            {contentDB.map((obj) => {
              if (count < 4) {
                return (
                  <CardItem
                    title={obj.title}
                    category={obj.category}
                    src={obj.src}
                    alt={obj.alt}
                    link={obj.link}
                  />
                );
              }
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
