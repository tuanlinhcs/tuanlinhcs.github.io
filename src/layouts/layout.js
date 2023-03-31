import Header from "./header";
import Footer from "./footer";

import "./layout.scss";

export default function Layout({ children }) {
  return (
    <div className="container-layout">
      <Header />
      <div className="container-children">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
