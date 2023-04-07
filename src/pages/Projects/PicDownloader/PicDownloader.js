import React, { useState, useEffect } from "react";
import LazyLoad from "react-lazyload";
import { ImageSkeleton } from "components/ui/skeleton/image";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";

import "../styles/chrome-extension-container.scss";

import { IoIosArrowBack, IoIosArrowForward, IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";
import { MdOutlineImageSearch } from "react-icons/md";
import { RxRulerSquare } from "react-icons/rx";
import { BsFiletypeJpg } from "react-icons/bs";
import { BiRename } from "react-icons/bi";

import IconChrome from "assets/icons/icons8-chrome-48.png";
import { ScrollAnimate } from "components/animate/ScrollAnimate";

const SliderImageLinks = [
  "https://raw.githubusercontent.com/letuan317/letuan317/main/images/PicDownloader/Marquee%20promo%20tile.png",
  "https://raw.githubusercontent.com/letuan317/letuan317/main/images/PicDownloader/Small%20promo%20tile.png",
  "https://raw.githubusercontent.com/letuan317/letuan317/main/images/PicDownloader/screenshot.png",
  "https://raw.githubusercontent.com/letuan317/letuan317/main/images/PicDownloader/screenshot-02.png",
];

export default function PicDownloader() {
  ReactGA.pageview("/picdownloader");
  const [sliderIndex, setSliderIndex] = useState(0);
  const [radioSliderDiv, setRadioSliderDiv] = useState([]);

  useEffect(() => {
    handleRadioSliderDiv(0);
  }, []);

  function handleRadioSliderDiv(newSliderIndex) {
    const tempRadioDiv = SliderImageLinks.map((link, i) => (
      <span key={i} className="icon icon-index">
        {i === newSliderIndex ? <IoIosRadioButtonOn /> : <IoIosRadioButtonOff />}
      </span>
    ));
    setRadioSliderDiv(tempRadioDiv);
  }

  function handleSliderPreviousImageChange() {
    const newSliderIndex = (sliderIndex + SliderImageLinks.length - 1) % SliderImageLinks.length;
    setSliderIndex(newSliderIndex);
    handleRadioSliderDiv(newSliderIndex);
  }

  function handleSliderNextImageChange() {
    const newSliderIndex = (sliderIndex + 1) % SliderImageLinks.length;
    setSliderIndex(newSliderIndex);
    handleRadioSliderDiv(newSliderIndex);
  }
  ScrollAnimate("content", "animate-fade-in");
  return (
    <>
      <Helmet>
        <title>Tuan Le - PicDownloader</title>
        <meta
          name="description"
          content="Looking for an easy and efficient way to download all images from a webpage? Look no further than PicDownloader! Our powerful tool allows you to quickly and easily download all images from any webpage, so you can save time and streamline your image collection. With PicDownloader, you can download images in bulk with just a few clicks, without the need for any complicated software or technical knowledge. Don't waste any more time manually saving images one by one - start using PicDownloader today and start building your image collection faster and more efficiently than ever before. Best of all, PicDownloader is completely free to use! Don't hesitate - start downloading your images now with PicDownloader."
        />
      </Helmet>
      <div className="chrome-extension-container">
        <div className="product-header">
          <LazyLoad placeholder={<ImageSkeleton />}>
            <img src="https://raw.githubusercontent.com/letuan317/letuan317/main/images/PicDownloader/icons8-download-image-48.png" alt="slide" className="item-image" />
          </LazyLoad>
          <h1 className="title">PicDownloader</h1>
        </div>
        <div className="product-banner">
          <div className="container">
            <div className="banner-left-container">
              <div>
                <h1>Smart, powerful, helpful.</h1>
                <p>Download all images</p>
                <button className="chrome-extension-button">
                  <img src={IconChrome} alt="icon" />
                  Add to Chrome Extension
                </button>
              </div>
            </div>
            <div className="banner-right-container">
              <div className="slideshow">
                <LazyLoad placeholder={<ImageSkeleton />}>
                  <img src={SliderImageLinks[sliderIndex]} alt="slide" className="blur-background-image" />
                  <img src={SliderImageLinks[sliderIndex]} alt="slide" className="slide-image" />
                </LazyLoad>
              </div>
              <div className="slideshow-controller">
                <IoIosArrowBack className="icon left" onClick={handleSliderPreviousImageChange} />
                <div className="slide-index">{radioSliderDiv}</div>
                <IoIosArrowForward className="icon right" onClick={handleSliderNextImageChange} />
              </div>
            </div>
          </div>
        </div>
        <div className="product-container">
          <div className="max-width flex flex-direction-column justify-content-center align-items-center">
            <section>
              <h1>The most powerful Image Download Tool</h1>
              <div className="highlight-features-container">
                <div className="item-container">
                  <div className="icon-feature-container">
                    <MdOutlineImageSearch class="icon-feature" />
                  </div>
                  <p>Show all images on page</p>
                </div>
                <div className="item-container">
                  <div className="icon-feature-container">
                    <RxRulerSquare class="icon-feature" />
                  </div>
                  <p>Filter image by range of width and height</p>
                </div>
                <div className="item-container">
                  <div className="icon-feature-container">
                    <BsFiletypeJpg class="icon-feature" />
                  </div>
                  <p>Filter images by types</p>
                </div>
                <div className="item-container">
                  <div className="icon-feature-container">
                    <BiRename class="icon-feature" />
                  </div>
                  <p>Custom image names</p>
                </div>
              </div>
            </section>
            <section className="content" id="content">
              <h1>Discover the Ultimate Chrome Extension for Hassle-Free Image Downloading - Introducing PicDownloader</h1>
              <h2>Effortlessly Browse and Save Images with PicDownloader</h2>
              <p>
                PicDownloader simplifies the process of browsing and saving images from the web, making it a must-have tool for image enthusiasts. Whether you're searching for the perfect image for a
                project or simply browsing social media, PicDownloader makes it simple and effortless to save your favorite pictures to your device.
              </p>
              <LazyLoad placeholder={<ImageSkeleton />}>
                <img src={SliderImageLinks[0]} alt="slide" className="item-image" />
              </LazyLoad>
              <h2>Experience One-Click Image Downloading with PicDownloader</h2>
              <p>
                With just one click, PicDownloader downloads high-quality images in a matter of seconds, saving you time and hassle. The extension is fast and user-friendly, allowing you to easily
                navigate through your favorite websites and download images without any interruption.
              </p>
              <img src={SliderImageLinks[1]} alt="slide" className="item-image" />
              <h2>Streamlined Design and Intuitive Interface for Easy Image Management</h2>
              <p>
                PicDownloader boasts a streamlined design and an intuitive interface, making it easy to organize and manage your saved images. With PicDownloader, you can rest assured that you won't
                lose track of your favorite pictures or struggle to find them again in the future.
              </p>
              <LazyLoad placeholder={<ImageSkeleton />}>
                <img src={SliderImageLinks[2]} alt="slide" className="item-image" />
              </LazyLoad>
              <h2>Never Miss Out on the Perfect Image Again with PicDownloader</h2>
              <p>
                Whether you're a designer, blogger, or someone who loves to collect images, PicDownloader is the perfect tool to have in your arsenal. It ensures that you never miss out on the perfect
                image again!
              </p>

              <h2>Download PicDownloader Today and Enjoy the Ultimate Image Downloading Experience!</h2>
              <p>
                Don't hesitate any longer. Download PicDownloader today and enjoy the ultimate image downloading experience. With its streamlined design, intuitive interface, and one-click image
                downloading, PicDownloader is the perfect extension for all image enthusiasts.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
