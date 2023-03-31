import "styles/notfound.scss";
import ButtonBack from "components/ui/buttons/ButtonBack";
import Layout from "layouts/layout";

// import Image from "assets/images/people-jump.png";
// import PlaceholderImage from "assets/images/people-jump-lowrate.png";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";

export const NotFound = () => {
  return (
    <Layout>
      <div className="not-found">
        <h1>404</h1>
        <h2>Not Found</h2>
        <h3>Sorry, we were unable to find that page</h3>
        <a href="/">
          <ButtonBack text="Back to Home" />
        </a>
        {/* <LazyLoadImage src={Image} width={600} height={400} PlaceholderSrc={PlaceholderImage} effect="blur" /> */}
      </div>
    </Layout>
  );
};
