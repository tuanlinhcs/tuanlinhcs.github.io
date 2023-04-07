import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";

import "./style.scss";
import { CopyToClipboard } from "utils/copyToClipboard";
import { NotifyCopyToClipboard } from "components/notify/CopyNotify";

import { databaseColorPalettes } from "./data";
import { saveAs } from "file-saver";
import { BsShare } from "react-icons/bs";
import { GiCrossMark } from "react-icons/gi";
import { CodeBlockCSS } from "components/code/codeBlock.js";

export default function ColorPalettes() {
  ReactGA.pageview("/color-palettes");
  const [isShowNotification, setIsShowNotification] = useState(false);
  const [isShowExport, setIsShowExport] = useState(false);
  const [currentColorCode, setCurrentColorCode] = useState(databaseColorPalettes[0].css);

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

  function downloadCssFile() {
    const blob = new Blob([currentColorCode], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "palette.scss");
  }

  return (
    <>
      <Helmet>
        <title>Tuan Le - Color Palettes</title>
        <meta
          name="description"
          content="Transform your website's design with our comprehensive collection of CSS color palettes! Our expertly curated selection features a wide range of stunning color combinations that are perfect for any type of website. Whether you're looking for a minimalist palette or something bold and colorful, we've got you covered. Don't wait - start browsing our collection today and take the first step towards creating a visually stunning website that will impress your visitors!"
        />
      </Helmet>
      {isShowExport ? <ExportCodeContainer colorCode={currentColorCode} handleClickCopied={handleClickCopied} downloadCssFile={downloadCssFile} setIsShowExport={setIsShowExport} /> : ""}

      <div className="color-palettes">
        <div className="container">
          <div className="header">
            <h1>Trending Color Palettes</h1>
            <p>Find inspiration from numerous exquisite color palettes and create something amazing!</p>
          </div>
          <div className="explore-palettes">
            {databaseColorPalettes.map((palette, key) => {
              return (
                <div className="palette_container">
                  <div className="explore-palettes_col" key={key}>
                    {palette.code.map((color, key2) => (
                      <PaletteCard key={key2} color={color} handleClickCopied={handleClickCopied} setCurrentColorCode={setCurrentColorCode} />
                    ))}
                  </div>
                  <div
                    className="export-button"
                    onClick={() => {
                      setCurrentColorCode(palette.css);
                      setIsShowExport(true);
                    }}
                  >
                    <BsShare /> <p>Export Palette</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {isShowNotification ? <NotifyCopyToClipboard content="Color" /> : ""}
    </>
  );
}

function PaletteCard(props) {
  const backgroundColor = "#" + props.color.hex;
  const textColor = getTextColor(props.color.hex);
  return (
    <div
      className="palette-card"
      style={{ backgroundColor: backgroundColor, color: textColor }}
      onClick={() => {
        props.handleClickCopied(backgroundColor);
      }}
    >
      <div className="color-info">
        <h3>{props.color.name}</h3>
        <p>#{props.color.hex}</p>
      </div>
    </div>
  );
}

function ExportCodeContainer(props) {
  return (
    <div className="color-palettes-export-code-container">
      <div className="cover"></div>
      <div className="export-code">
        <div className="container">
          <div className="top">
            <GiCrossMark
              className="icon"
              onClick={() => {
                props.setIsShowExport(false);
              }}
            />
            <h3>Code</h3>
          </div>
          <CodeBlockCSS>{props.colorCode}</CodeBlockCSS>
          <div className="controllers">
            <button className="download" onClick={props.downloadCssFile}>
              Download
            </button>
            <button
              className="copy"
              onClick={() => {
                props.handleClickCopied(props.colorCode);
              }}
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
function getTextColor(background_color) {
  // Convert the input color to RGB values
  const r = parseInt(background_color.substr(0, 2), 16);
  const g = parseInt(background_color.substr(2, 2), 16);
  const b = parseInt(background_color.substr(4, 2), 16);

  // Calculate the relative luminance of the background color
  // using the formula recommended by the WCAG 2.0 standard
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

  // Return 'white' if the luminance is below a certain threshold,
  // otherwise return 'black'
  return luminance <= 0.6 ? "white" : "black";
}
