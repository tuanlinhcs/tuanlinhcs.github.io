import React, { useState, useEffect } from "react";
import LazyLoad from "react-lazyload";
import { ImageSkeleton } from "components/ui/skeleton/image";
import "../styles/chrome-extension-container.scss";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";

import { IoIosArrowBack, IoIosArrowForward, IoIosRadioButtonOff, IoIosRadioButtonOn, IoIosPricetags } from "react-icons/io";
import { VscGraphLine } from "react-icons/vsc";
import { GrGraphQl } from "react-icons/gr";
import IconChrome from "assets/icons/icons8-chrome-48.png";
import { ScrollAnimate } from "components/animate/ScrollAnimate";

const SliderImageLinks = [
  "https://raw.githubusercontent.com/letuan317/letuan317/main/images/AmazonPriceNinja/Marquee%20promo%20tile.png",
  "https://raw.githubusercontent.com/letuan317/letuan317/main/images/AmazonPriceNinja/Small%20promo%20tile.png",
  "https://raw.githubusercontent.com/letuan317/letuan317/main/images/AmazonPriceNinja/Screenshots-02.png",
  "https://raw.githubusercontent.com/letuan317/letuan317/main/images/AmazonPriceNinja/Screenshots.png",
];

export default function AmazonPriceNinja() {
  ReactGA.pageview("/amazon-price-ninja");
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
  const handleAddToChrome = () => {
    window.open("https://chrome.google.com/webstore/detail/amazon-priceninja/cipjolkpnbofhpkcjchaedoajfflajoi?hl=en&authuser=0", "_blank");
  };
  ScrollAnimate("content", "animate-fade-in");
  return (
    <>
      <Helmet>
        <title>Tuan Le - Amazon PriceNinja</title>
        <meta
          name="description"
          content="Looking for a tool to track Amazon prices and save money on your purchases? Look no further than Amazon PriceNinja! Our powerful tool allows you to easily track the price history of any product on Amazon and get alerts when prices drop. With our intuitive interface and comprehensive data, you'll never miss a deal again. Don't hesitate - start using Amazon PriceNinja today and start saving on your Amazon purchases!"
        />
      </Helmet>
      <div className="chrome-extension-container">
        <div className="product-header">
          <LazyLoad placeholder={<ImageSkeleton />}>
            <img src="https://raw.githubusercontent.com/letuan317/letuan317/main/images/AmazonPriceNinja/icons8-cart-64.png" alt="slide" className="item-image" />
          </LazyLoad>
          <h1 className="title">Amazon PriceNinja</h1>
        </div>
        <div className="product-banner">
          <div className="container">
            <div className="banner-left-container">
              <div className="banner-left-container-extend">
                <h1>
                  The all-pro <br />
                  Amazon tracking price.
                </h1>
                <p>Highest and Lowest Price. Product information</p>
                <button className="chrome-extension-button" onClick={handleAddToChrome}>
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
              <h1>The most powerful Amazon Price Tracking yet</h1>
              <div className="highlight-features-container">
                <div className="item-container">
                  <div className="icon-feature-container">
                    <IoIosPricetags class="icon-feature" />
                  </div>
                  <p>Show highest and lowest prices of a product on Amazon</p>
                </div>

                <div className="item-container">
                  <div className="icon-feature-container">
                    <VscGraphLine class="icon-feature" />
                  </div>
                  <p>The price history is presented in a graph</p>
                </div>
                <div className="item-container">
                  <div className="icon-feature-container">
                    <GrGraphQl class="icon-feature" />
                  </div>
                  <p>Displays useful details: weight, dimensions, manufacturer, country </p>
                </div>
              </div>
            </section>
            <section className="content" id="content">
              <h2>Introduction to Amazon PriceNinja</h2>
              <p>
                Amazon PriceNinja is a powerful and user-friendly plugin designed to provide comprehensive product information to Amazon shoppers. With this tool, users can easily access the highest
                and lowest prices of any given product, as well as its price history. Moreover, Amazon PriceNinja provides a wealth of detailed product information, including product name, image,
                description, and customer reviews, making it an essential resource for informed purchasing decisions. With its intuitive design and advanced functionality, Amazon PriceNinja is a
                must-have plugin for any Amazon shopper looking to optimize their shopping experience.
              </p>
              <LazyLoad placeholder={<ImageSkeleton />}>
                <img src="https://raw.githubusercontent.com/letuan317/letuan317/main/images/AmazonPriceNinja/price.png" alt="slide" className="item-image" />
              </LazyLoad>
              <h2>How to Use Amazon PriceNinja</h2>
              <p>
                To utilize the Amazon PriceNinja plugin, users simply need to install it onto their Chrome browser and navigate to an Amazon product page. The plugin seamlessly collects the relevant
                product information and presents it on the same page, eliminating the need for any cumbersome additional steps. With this plugin, users can easily access the current price of the
                product, as well as its highest and lowest prices over time. The price history is presented in a convenient and easy-to-read graph, empowering users to quickly identify price trends
                and make informed purchasing decisions. Overall, Amazon PriceNinja is an indispensable tool for Amazon shoppers looking to streamline their shopping experience and optimize their
                savings.
              </p>
              <img src="https://raw.githubusercontent.com/letuan317/letuan317/main/images/AmazonPriceNinja/chart.png" alt="slide" className="item-image" />
              <h2>Accessing Product Information with Amazon PriceNinja</h2>
              <p>
                Apart from providing crucial price information, Amazon PriceNinja also showcases additional product details, including weight, dimensions, and features. This valuable information is
                presented in an accessible format, allowing users to effortlessly copy and paste it into a spreadsheet or document for future reference. With Amazon PriceNinja, users can seamlessly
                access a wealth of product information, facilitating informed and confident purchasing decisions.
              </p>
              <LazyLoad placeholder={<ImageSkeleton />}>
                <img src="https://raw.githubusercontent.com/letuan317/letuan317/main/images/AmazonPriceNinja/product-details.png" alt="slide" className="item-image" />
              </LazyLoad>
              <h2>Weight Conversion Feature of Amazon PriceNinja</h2>
              <p>
                Amazon PriceNinja is a powerful plugin that greatly enhances the user experience by providing a weight conversion feature that seamlessly converts weight measurements into pounds. This
                feature significantly simplifies the process of understanding and recognizing weight measurements, enabling users to easily make informed purchasing decisions. With Amazon PriceNinja,
                users can optimize their shopping experience by quickly and accurately converting weight measurements, facilitating efficient and confident purchasing decisions.
              </p>
              <LazyLoad placeholder={<ImageSkeleton />}>
                <img src="https://raw.githubusercontent.com/letuan317/letuan317/main/images/AmazonPriceNinja/convert-weight.png" alt="slide" className="item-image" />
              </LazyLoad>
              <h2>Conclusion: The Benefits of Amazon PriceNinja</h2>
              <p>
                In summary, Amazon PriceNinja is an indispensable tool for Amazon shoppers seeking to make informed purchasing decisions. By providing comprehensive price history and product
                information, the plugin enables users to easily identify the best deals and avoid overpaying for products. With its intuitive design and advanced functionality, Amazon PriceNinja
                greatly optimizes the user's shopping experience, facilitating confident and efficient purchasing decisions. Overall, Amazon PriceNinja is a must-have tool for any Amazon shopper
                looking to optimize their savings and make the most of their shopping experience.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
