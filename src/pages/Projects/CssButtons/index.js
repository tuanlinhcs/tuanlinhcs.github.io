import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";

import "../styles/css-collection.scss";
import { CopyToClipboard } from "utils/copyToClipboard";
import { NotifyCopyToClipboard } from "components/notify/CopyNotify";

import { database_CssButtons } from "./data";
import "./buttons.scss";

export default function CssButtons() {
  ReactGA.pageview("/css-buttons");
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
        <title>Tuan Le - CSS Buttons</title>
        <meta
          name="description"
          content="Looking for the perfect collection of CSS buttons to elevate your website design? Our comprehensive guide has got you covered! From sleek and minimalist styles to bold and colorful options, we've curated a diverse range of button designs that are sure to impress. Don't miss out on this opportunity to add some flair to your website - start browsing our collection today!"
        />
      </Helmet>
      <div className="css-collection-container">
        <div className="container">
          <div className="header">
            <h1>Trending CSS Buttons</h1>
            <p>Find inspiration from numerous exquisite css buttons and create something amazing!</p>
          </div>
          <div className="explore-items-container">
            <div className="explore-items">
              {database_CssButtons.map((item, key) => {
                const myElement = <div dangerouslySetInnerHTML={{ __html: item.html }}></div>;
                return (
                  <div
                    className="item-container css-buttons-item"
                    key={key}
                    onClick={() => {
                      handleClickCopied(item.text);
                    }}
                  >
                    {myElement}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {isShowNotification ? <NotifyCopyToClipboard content="Button" /> : ""}
    </>
  );
}
