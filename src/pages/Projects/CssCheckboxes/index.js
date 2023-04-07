import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";

import "../styles/css-collection.scss";
import { CopyToClipboard } from "utils/copyToClipboard";
import { NotifyCopyToClipboard } from "components/notify/CopyNotify";

import { database_CssCheckboxes } from "./data";
import "./checkboxes.scss";

export default function CssCheckboxes() {
  ReactGA.pageview("/css-checkboxes");
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
        <title>Tuan Le - CSS Checkboxes</title>
        <meta
          name="description"
          content="Enhance your website design with our handpicked collection of CSS checkboxes! Our curated selection features a range of unique and stylish checkbox designs that will make your website stand out from the rest. With our expert tips and tricks, you can easily customize these checkboxes to match your website's aesthetic and improve user engagement. Don't miss out on this opportunity to take your website to the next level - start browsing our collection today and create a visually stunning website that your visitors will love!"
        />
      </Helmet>
      <div className="css-collection-container">
        <div className="container">
          <div className="header">
            <h1>Trending CSS Checkboxes</h1>
            <p>Find inspiration from numerous exquisite css checkboxes and create something amazing!</p>
          </div>
          <div className="explore-items-container">
            <div className="explore-items">
              {database_CssCheckboxes.map((item, key) => {
                const myElement = <div dangerouslySetInnerHTML={{ __html: item.html }}></div>;
                return (
                  <div
                    className="item-container css-checkboxes-item"
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
      {isShowNotification ? <NotifyCopyToClipboard content="Checkbox" /> : ""}
    </>
  );
}
