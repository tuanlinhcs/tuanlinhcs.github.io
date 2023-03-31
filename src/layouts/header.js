import React, { lazy } from "react";
import "./header";
const Nav = lazy(() => import("layouts/navbar/nav01"));

export default function Header() {
  return (
    <div className="header">
      <Nav />
      <div className="extra-space-nav"></div>
    </div>
  );
}
