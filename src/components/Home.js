import React from "react";
import "../css/Home.css";
import mainHeader from "../img/top_image.png";
import profileImage from "../img/profile.jpg";

export const Home = () => {
  return (
    <div>
      <div className="home_contents">
        <img src={mainHeader} />
      </div>
      <div className="profile">
        <img src={profileImage} />
      </div>
      <div className="profile_contents">
        <h1>
          <span>S</span>akoda Shiho
        </h1>
        <p className="profile_text">
          1995年3月生まれ、兵庫県出身。
          <br />
          小学生の頃から、ホームページ制作やイラストを描くなど、デザインすることが趣味。
        </p>
      </div>
    </div>
  );
};
