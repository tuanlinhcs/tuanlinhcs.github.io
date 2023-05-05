import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Portfolio from "./pages/Portfolio";
import Blogs from "./pages/Blogs";
import BlogsPages from "pages/Blogs/pages/index";

import HeaderLayout from "layouts/header";

const ColorPalettes = lazy(() => import("./pages/Projects/ColorPalettes"));
const CssBoxShadow = lazy(() => import("./pages/Projects/CssBoxShadow"));
const CssButtons = lazy(() => import("./pages/Projects/CssButtons"));
const CssCheckboxes = lazy(() => import("./pages/Projects/CssCheckboxes"));
const CssShapes = lazy(() => import("./pages/Projects/CssShapes"));
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
          {/* Chrome Extension: Amazon PriceNinja */}
          <Route
            path="/color-palettes"
            element={
              <>
                <HeaderLayout />
                <ColorPalettes />
              </>
            }
          ></Route>
          <Route
            path="/css-box-shadow"
            element={
              <>
                <HeaderLayout />
                <CssBoxShadow />
              </>
            }
          ></Route>
          <Route
            path="/css-buttons"
            element={
              <>
                <HeaderLayout />
                <CssButtons />
              </>
            }
          ></Route>
          <Route
            path="/css-checkboxes"
            element={
              <>
                <HeaderLayout />
                <CssCheckboxes />
              </>
            }
          ></Route>
          <Route
            path="/css-shapes"
            element={
              <>
                <HeaderLayout />
                <CssShapes />
              </>
            }
          ></Route>
        </Routes>
        <BlogsPages />
      </BrowserRouter>
    </>
  );
}

export default App;
