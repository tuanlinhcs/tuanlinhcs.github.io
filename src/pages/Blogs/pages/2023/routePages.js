import React from "react";
import { Routes, Route } from "react-router-dom";

import * as pages from "./index";

export default function Pages2023() {
  return (
    <Routes>
      <Route path="/how-to-add-google-analytics-to-a-react-application" element={<pages.page_20230312 />} />
    </Routes>
  );
}
