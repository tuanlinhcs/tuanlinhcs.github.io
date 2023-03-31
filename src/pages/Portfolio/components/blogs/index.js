import "./blogs.scss";
import BlogsDB from "data/blogs";
import { FiExternalLink, FiBox } from "react-icons/fi";
import { ButtonPrimaryNewTabLink } from "../ui/buttons";

export default function Blogs() {
  return (
    <section className="section-blogs" id="blogs">
      <header>Some Article I Wrote</header>
      <div className="blogs-container">
        {BlogsDB.map((blog, idx) => (
          <BlogItem blog={blog} key={idx} />
        ))}
      </div>
      <div className="container-center">
        <ButtonPrimaryNewTabLink name="Show More" link="/blogs" />
      </div>
    </section>
  );
}

function BlogItem({ blog }) {
  return (
    <article>
      <div className="blog-item">
        <div className="top">
          <FiBox className="icon-box" />
          <FiExternalLink className="icon-link" />
        </div>
        <h2>
          {blog.name.substring(0, 47)}
          {blog.name.length > 47 ? "..." : ""}
        </h2>
        <p>
          {blog.description.substring(0, 95)}
          {blog.description.length > 95 ? "..." : ""}
        </p>
        <div className="tags">
          {blog.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
