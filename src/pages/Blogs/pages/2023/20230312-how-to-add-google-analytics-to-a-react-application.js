import { Helmet } from "react-helmet";
import LazyLoad from "react-lazyload";
import CodeBlock from "components/code/codeBlock.js";

import Layout from "layouts/layout";

import skeleton from "assets/images/skeleton.png";

const data = {
  name: "How to add Google Analytics to a React application How to add Google Analytics to a React application",
  description:
    "Google Analytics is a powerful tool that helps website owners track website traffic, user engagement, and other metrics. Adding Google Analytics to a React application can be a bit tricky, but it is essential to track user behavior and make data-driven decisions to improve the user experience. In this article, we will discuss how to add Google Analytics to a React application.",
  tags: ["tag01"],
  link: "/how-to-add-google-analytics-to-a-react-application",
  category: "React",
  src: "https://images.ctfassets.net/9ugpxd12fxah/6gnjklOBbvmiRex3m3Aegh/4e2d70ca05c02a0d5257ca4b33e69e66/New_Project__1_.jpg",
  timestamp: "March 12, 2023",
};

export default function page_20230312() {
  const codeString = `
   
  import React, { useEffect } from 'react';
  import { useLocation } from 'react-router-dom';
  import ReactGA from 'react-ga';

  function App() {
    const location = useLocation();

    useEffect(() => {
      ReactGA.pageview(location.pathname + location.search);
    }, [location]);

    return (
      <div className="App">
        ...
      </div>
    );
  }

  export default App;
  
  `;
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tuan Le - How to Add Google Analytics to a React Application</title>
      </Helmet>
      <Layout>
        <div className="container-blog">
          <article>
            <h1>How to Add Google Analytics to a React Application</h1>
            <p className="timestamp">{data.timestamp}</p>
            <LazyLoad once={true} placeholder={<img src={skeleton} alt="Loading..." />}>
              <img src={data.src} alt="img" />
            </LazyLoad>
            <p>
              Google Analytics is a powerful tool that helps website owners track website traffic, user engagement, and other metrics. Adding Google Analytics to a React application can be a bit
              tricky, but it is essential to track user behavior and make data-driven decisions to improve the user experience. In this article, we will discuss how to add Google Analytics to a React
              application.
            </p>
            <h2>Step 1: Sign up for Google Analytics</h2>
            <p>
              The first step is to sign up for Google Analytics. Go to the <a href="https://analytics.google.com/">Google Analytics website</a> and sign up for a free account if you don't already have
              one. Once you've signed up, you'll be prompted to create a new property for your website. Follow the prompts to create a new property and get your tracking ID.
            </p>
            <h2>Step 2: Install the Google Analytics React package</h2>
            <p>
              The next step is to install the Google Analytics React package. The <code>react-ga</code> package is a popular package that provides an easy-to-use API for adding Google Analytics to a
              React application. To install this package, open a terminal window in your project directory and run the following command:
            </p>
            <pre>
              <CodeBlock>npm install react-ga --save</CodeBlock>
            </pre>
            <h2>Step 3: Initialize Google Analytics</h2>
            <p>
              Once you've installed the <code>react-ga</code> package, the next step is to initialize Google Analytics. You can do this in your <code>App.js</code> file or any other file where you
              want to track user behavior. First, import the <code>react-ga</code> package:
            </p>
            <pre>
              <CodeBlock>import ReactGA from 'react-ga';</CodeBlock>
            </pre>
            <p>Then, initialize Google Analytics with your tracking ID:</p>
            <pre>
              <CodeBlock>ReactGA.initialize('YOUR_TRACKING_ID');</CodeBlock>
            </pre>
            <p>
              Replace <code>YOUR_TRACKING_ID</code> with your actual tracking ID that you obtained in Step 1.
            </p>
            <h2>Step 4: Track user behavior</h2>
            <p>
              Now that you've initialized Google Analytics, you can track user behavior. You can track pageviews, events, and other metrics using the <code>react-ga</code> package. Here's an example
              of how to track a pageview:
            </p>
            <pre>
              <CodeBlock>{codeString}</CodeBlock>
            </pre>
            <p>
              In this example, we're using the <code>useLocation</code> hook from the <code>react-router-dom</code> package to get the current location. Then, we're using the <code>useEffect</code>{" "}
              hook to track a pageview whenever the location changes. The <code>ReactGA.pageview</code> method tracks the pageview with the current URL.
            </p>
            <h2>Step 5: Verify your setup</h2>
            <p>
              Once you've added Google Analytics to your React application, you should verify that it's working properly. You can do this by going to the Google Analytics website and checking the
              real-time reports. Navigate to your website and check that the real-time reports are updating as you navigate around your website.
            </p>
            <p>
              In conclusion, adding Google Analytics to a React application is an essential step to track user behavior and improve the user experience. By following these steps, you can easily add
              Google Analytics to your React application and start tracking user behavior.
            </p>
          </article>
        </div>
      </Layout>
    </>
  );
}
