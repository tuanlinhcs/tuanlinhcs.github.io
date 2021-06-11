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
title:"Deploy a Routed React App to GitHub Pages",
category:"React",
timestamp:"06/10/2021 03:09 PM",
link: "/deploy-a-routed-react-app-to-github-pages",
src:""
}

export { default as page_20210610030900 } from "./20210610030900-deploy-a-routed-react-app-to-github-pages";


<Route exact path="/deploy-a-routed-react-app-to-github-pages" component={pages.page_20210610030900}
/>



*/

import image01 from "blog/images/2021/2021061001-deploy-a-routed-react-app-to-github-pages.png";
import image02 from "blog/images/2021/2021061002-deploy-a-routed-react-app-to-github-pages.png";
import image03 from "blog/images/2021/2021061003-deploy-a-routed-react-app-to-github-pages.png";

const tags = "#React  #Github Pages";
const title = "Deploy a Routed React App to GitHub Pages";
const timestamp = "06/10/2021 03:09 PM";

export default class Pages extends Component {
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
            <h5>
              When we build projects, we want to make them online. Instead of
              buying a domain and hosting, then taking the time to configure it.
              Moreover, the cost of domain and hosting is not cheap, so it's
              easier just to host it using <strong>GitHub Pages</strong>.
            </h5>
            <RandomFeature01 />
            <p>
              In this article, I'll show you how to create a simple
              <strong>React application </strong>that uses routing and then
              we'll learn how to upload it to <strong>GitHub Pages</strong>.
            </p>
            <h2>Prerequisites</h2>
            <p>
              We need to have <strong>Node</strong>, <strong>yarn</strong> and
              <strong> npm</strong> installed on your machine. Let's check the
              their version with these command
            </p>

            <Gist id="cd9e4f9b109d38fff5d3e7a759d9466e" file="prerequisites" />

            <p>If missing any of them, let's install them:</p>
            <ul>
              <li>
                <a href="https://nodejs.org/en/download/">
                  Node (contains npm)
                </a>
              </li>
              <li>
                <a href="https://classic.yarnpkg.com/en/docs/install/#windows-stable">
                  Yarn
                </a>
              </li>
            </ul>
            <p>
              Next, we need create a repository on GitHub. I recommend you
              should set name of repository as:{" "}
              <strong>nameOfProfile.github.io</strong>
            </p>
            <p>
              Example: <q>letuan317.github.io</q>
            </p>
            <p>
              Clone the repository, and let create our project by using{" "}
              <strong>create-react-app</strong>, you need to type the following
              in the terminal:
            </p>

            <Gist id="cd9e4f9b109d38fff5d3e7a759d9466e" file="init" />
            <p>
              Once the operation finishes, let cut all folders and files in{" "}
              <strong>App</strong> folder, and paste in git folder.
            </p>
            <p>After that, we can run the project by command:</p>
            <Gist id="cd9e4f9b109d38fff5d3e7a759d9466e" file="start" />
            <p>
              If everything runs properly, you will see a message in the
              terminal that says that your application is running on a local
              server at this address:{" "}
              <a href="http://localhost:3000/">http://localhost:3000/</a>
            </p>
            <p>If you head over there in your browser, you will see this:</p>
            <img src={image01} alt="React" />
            <h3>How to Deploy Your Project to GitHub</h3>
            <q>
              ☝️ Make sure to mark your repository as public. If you mark it as
              private, you won't be able to use GitHub Pages.
            </q>
            <p>
              This package will help us to deploy our code to the{" "}
              <strong>gh-pages</strong> branch which will be used to host our
              application on <strong>GitHub Pages</strong>.
            </p>
            <RandomFeature02 />
            <p>
              To allow us to use the <strong>gh-pages</strong> package properly,
              we need to add two keys to our scripts value in the{" "}
              <strong>package.json</strong> file:
            </p>
            <Gist
              id="cd9e4f9b109d38fff5d3e7a759d9466e"
              file="package_gh-pages.json"
            />
            <p>
              Next, we need to modify our <strong>package.json</strong> file by
              adding the homepage field. This field is used by{" "}
              <strong>React</strong> to figure out the root URL in the built
              HTML file. In it, we will put the URL of our{" "}
              <strong>GitHub repository</strong>.
            </p>

            <Gist
              id="cd9e4f9b109d38fff5d3e7a759d9466e"
              file="package_homepage.json"
            />
            <p>
              To deploy our application, type the following in the terminal:
            </p>
            <Gist id="cd9e4f9b109d38fff5d3e7a759d9466e" file="deploy" />
            <p>
              Running the command above takes care of building your application
              and pushing it to brach <strong>gh-pages</strong>
            </p>
            <p>
              You will know that the process was successful if at the end of it
              you see the word <strong>Published</strong>. We can now head to
              our <strong>GitHub repository</strong> under{" "}
              <strong>Settings</strong> and scroll down to the{" "}
              <strong>GitHub Pages</strong>
              section.
            </p>

            <img src={image02} alt="Github Pages" />
            <q>
              Make sure that <strong>Source</strong> from{" "}
              <strong>Branch:</strong> <i>gh-pages</i>, because sometime{" "}
              <strong>Git</strong> set default by <strong>main</strong> branch
            </q>
            <p>
              If you see a message similar to the one above, it means your
              application is now hosted successfully on{" "}
              <strong>GitHub Pages</strong>.
            </p>
            <h2>Routing in React</h2>
            <p>
              In this project, we will create multiple pages , so we need
              install <strong>react-router-dom</strong>.
            </p>
            <Gist
              id="cd9e4f9b109d38fff5d3e7a759d9466e"
              file="react-router-dom"
            />

            <p>
              To make use of routing in our application, let's create a
              navigation element which will be visible at the top of the
              application. We will be adding this inside our{" "}
              <strong>App.js</strong> file and replacing the current HTML markup
              that is there.
            </p>
            <Gist id="cd9e4f9b109d38fff5d3e7a759d9466e" file="navigation.js" />
            <p>
              The <strong>Route</strong> is one of the most important components
              in react-router because it lets you render different component
              based on the path of the URL.
            </p>
            <Gist id="cd9e4f9b109d38fff5d3e7a759d9466e" file="Route.js" />
            <p>
              You can see that we created three routes for <i>home</i> and{" "}
              <i>about</i> <i>contact</i>. The Switch component lets us group
              route components together and it will only match one of them.
            </p>
            <p>
              Our combined <strong>App.js</strong> file looks like this:
            </p>
            <Gist id="cd9e4f9b109d38fff5d3e7a759d9466e" file="App.js" />
            <p>
              One last thing we should do is wrap our entire project in a Router
              component. We need to do this because it enables us to use routing
              in our application. We will be using the BrowserRouter component
              as it uses HTML5's history API.
            </p>
            <Gist id="cd9e4f9b109d38fff5d3e7a759d9466e" file="index.js" />
            <p>
              One last thing we should do is wrap our entire project in a Router
              component. We need to do this because it enables us to use routing
              in our application. We will be using the{" "}
              <strong>BrowserRouter</strong> component as it uses HTML5's
              history API.
            </p>
            <h2>Custom domain and make them secure:</h2>
            <p>
              For turning out page more professional, we will use a domain to
              replace default Github Page domain.
            </p>
            <p>
              In repository, go to{" "}
              <strong>
                <i>Setting</i>
              </strong>{" "}
              →{" "}
              <strong>
                <i>Pages</i>
              </strong>{" "}
              →{" "}
              <strong>
                <i>Custom domain</i>
              </strong>
              , then add the domain you have. I recommend you should add{" "}
              <strong>
                <i>www.</i>
              </strong>
              {"  "}
              before the domain name:
            </p>
            <img src={image03} alt="Github Pages" />
            <p>
              Sometime you can't check <strong>Enforce HTTPS</strong>, the
              solution:{" "}
            </p>
            <ol>
              <li>Delete the custom domain input, and add again.</li>
              <li>
                Config the<strong>DNS</strong> on domain:
              </li>
            </ol>
            <Gist id="cd9e4f9b109d38fff5d3e7a759d9466e" file="DNS" />
            <h3>
              Congratulation, your website is online now. Thank you for reading
              this tutorial.
            </h3>
            <RandomFeature03 />
          </div>
        </div>
      </div>
    );
  }
}
