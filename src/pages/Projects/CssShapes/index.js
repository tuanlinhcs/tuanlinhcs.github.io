import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";

import "../styles/css-collection.scss";
import { CopyToClipboard } from "utils/copyToClipboard";
import { NotifyCopyToClipboard } from "components/notify/CopyNotify";

import { database_CssShapes } from "./data";
import "./shapes.scss";

export default function CssShapes() {
  ReactGA.pageview("/css-shapes");
  const [isShowNotification, setIsShowNotification] = useState(false);

  useEffect(() => {
    let timeoutId;
    const timeDelay = 1000 * 5;
    if (isShowNotification) {
      timeoutId = setTimeout(() => {
        setIsShowNotification(false);
      }, timeDelay);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isShowNotification]);

  const handleClickCopied = (copyText) => {
    CopyToClipboard(copyText, setIsShowNotification);
  };

  return (
    <>
      <Helmet>
        <title>Tuan Le - CSS Shapes</title>
        <meta
          name="description"
          content="Looking for unique and creative ways to enhance your web design? Check out our CSS shapes collection, featuring a variety of customizable shapes that can add visual interest and depth to your website. From circles to polygons, our collection offers endless possibilities for creating a dynamic and engaging user experience. Browse now and elevate your web design game with our CSS shapes."
        />
      </Helmet>
      <div className="css-collection-container">
        <div className="container">
          <div className="header">
            <h1>Trending CSS Shapes</h1>
            <p>Find inspiration from numerous exquisite css shapes and create something amazing!</p>
          </div>
          <div className="explore-items-container">
            <div className="explore-items">
              {database_CssShapes.map((item, key) => {
                const myElement = <div dangerouslySetInnerHTML={{ __html: item.html }}></div>;
                return (
                  <div
                    className="item-container css-shapes-item"
                    key={key}
                    onClick={() => {
                      handleClickCopied(item.text);
                    }}
                  >
                    <div>{myElement}</div>
                    <p>{item.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {isShowNotification ? <NotifyCopyToClipboard content="Shape" /> : ""}
    </>
  );
}
