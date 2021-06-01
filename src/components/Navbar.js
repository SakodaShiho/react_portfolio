import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

export const Navbar = () => {
  const current = {
    "border-bottom": "solid 1px",
    color: "#dcbdaf",
  };

  return (
    <div>
      <div className="wrap">
        <div className="block-title">
          <div className="title-1">
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
          <div className="title-1">
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
        <div className="block style-7"></div>
        <div className="block style-2"></div>
        <div className="block style-3"></div>
        <div className="block style-1"></div>
        <div className="block style-2"></div>
        <div className="block style-3"></div>
        <div className="block style-4"></div>
        <div className="block style-5"></div>
        <div className="block style-6"></div>
        <div className="block style-7"></div>
        <div className="block style-8"></div>
        <div className="block style-9"></div>
        <div className="block style-10"></div>
        <div className="block style-6"></div>
        <div className="block style-3"></div>
        <div className="block style-12"></div>
        <div className="block style-1"></div>
        <div className="block style-11"></div>
        <div className="block style-7"></div>
        <div className="block style-2"></div>
        <div className="block-13"></div>
      </div>
    </div>
  );
};
