import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

export const Navbar = () => {
  const current = {
    "border-bottom": "solid 1px",
    color: "#d8c8ae",
  };

  return (
    <div>
      <div class="wrap">
        <div class="block-title">
          <div class="title-1">
            <NavLink
              exact
              to="/"
              activeStyle={current}
              className="hover_action"
            >
              HOME
            </NavLink>
            <NavLink
              exact
              to="/Work"
              activeStyle={current}
              className="hover_action"
            >
              WORK
            </NavLink>
          </div>
          <div class="title-1">
            <NavLink
              exact
              to="/Skills"
              activeStyle={current}
              className="hover_action"
            >
              SKILLS
            </NavLink>
            <NavLink
              exact
              to="/Career"
              activeStyle={current}
              className="hover_action"
            >
              CAREER
            </NavLink>
          </div>
        </div>
        <div class="block style-1"></div>
        <div class="block style-2"></div>
        <div class="block style-3"></div>
        <div class="block style-4"></div>
        <div class="block style-5"></div>
        <div class="block style-6"></div>
        <div class="block style-7"></div>
        <div class="block style-8"></div>
        <div class="block style-9"></div>
        <div class="block style-10"></div>
        <div class="block style-6"></div>
        <div class="block style-3"></div>
        <div class="block style-12"></div>
        <div class="block style-1"></div>
        <div class="block style-11"></div>
        <div class="block style-7"></div>
        <div class="block style-2"></div>
        <div class="block-13"></div>
      </div>
    </div>
  );
};
