import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";

import "../styles/css-collection.scss";
import { CopyToClipboard } from "utils/copyToClipboard";
import { NotifyCopyToClipboard } from "components/notify/CopyNotify";

import { database_CssBoxShadow } from "./data";

export default function CssBoxShadow() {
  ReactGA.pageview("/css-box-shadow");
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
        <title>Tuan Le - CSS Box Shadow</title>
        <meta
          name="description"
          content="Upgrade your website design with our extensive collection of CSS box shadow styles! Our handpicked selection features a variety of stunning options to elevate your web pages and captivate your audience. From subtle and elegant to bold and dynamic, our CSS box shadow styles will make your website stand out from the competition. Don't wait - start browsing our collection today and take your design to the next level!"
        />
      </Helmet>
      <div className="css-collection-container">
        <div className="container">
          <div className="header">
            <h1>Trending CSS Box Shadow</h1>
            <p>Find inspiration from numerous exquisite css box shadows and create something amazing!</p>
          </div>
          <div className="explore-items-container">
            <div className="explore-items">
              {database_CssBoxShadow.map((item, key) => {
                return (
                  <div
                    className="item-container"
                    style={{ boxShadow: item.style }}
                    key={key}
                    onClick={() => {
                      handleClickCopied(item.text);
                    }}
                  >
                    #{item.id}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {isShowNotification ? <NotifyCopyToClipboard content="box-shadow" /> : ""}
    </>
  );
}
