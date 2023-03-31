import { Helmet } from "react-helmet";
import Layout from "layouts/layout";

import Card01 from "components/ui/cards/card01";

import "./blogs.scss";

import BlogsDB01 from "./data/page01";

// import BlogsPages from "./pages";

export default function Blogs() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tuan Le - Blogs</title>
      </Helmet>
      <Layout>
        <div className="blogs">
          <div className="container-blogs">
            <div className="header">
              <h1>Explore technology</h1>
              <div className="lines">
                <div className="line-green" />
                <div className="line-gray" />
              </div>
            </div>
            <div className="container-blogs-show">
              {BlogsDB01.map((blog, idx) => (
                <Card01 props={blog} key={idx} />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
