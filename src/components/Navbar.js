import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

export const Navbar = () => {
  return (
    <div>
      <div class="wrap">
        <div class="block-title">
          <div class="title-1">
            <Link to="/">HOME</Link>
            <Link to="/Work">WORK</Link>
          </div>
          <div class="title-1">
            <Link to="/Skills">SKILLS</Link>
            <Link to="/Carrier">CARRIER</Link>
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
