import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Portfolio from "./pages/Portfolio";
import Blogs from "./pages/Blogs";
// import { NotFound } from "pages/404";

import BlogsPages from "pages/Blogs/pages/index";

// import Nav from "layouts/navbar/nav01";

// const Portfolio = lazy(() => import("./pages/Portfolio"));

// const NotFound = lazy(() => import("./pages/404"));

// * ============
// * = Projects =
// * ============

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          {/* <Route path="*" element={<NotFound />}></Route> */}
        </Routes>
        <BlogsPages />
      </BrowserRouter>
    </>
  );
}

export default App;
