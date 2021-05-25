import React from "react";
import "../css/Home.css";
import mainHeader from "../img/top_image.png";
import profileImage from "../img/profile.jpg";
import qiitaFavicon from "../img/qiita_favicon.png";
import qiitaFaviconHover from "../img/qiita_favicon_wh.png";
// get our fontawesome imports
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Home = () => {
  const iconStyle = { padding: 10, fontSize: 40 };

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
          <span>S</span>akoda <span>S</span>hiho
        </h1>
        <p className="profile_text">
          1995年3月生まれ、兵庫県出身。
          <br />
          小学生の頃から、ホームページ制作やイラストを描くなど、デザインすることが趣味。
        </p>
      </div>

      <div className="sns">
        <div className="social-btns">
          <a
            class="btn twitter"
            href="https://twitter.com/shi_design_"
            target="blank_"
          >
            <FontAwesomeIcon
              className="fa fa-twitter"
              style={iconStyle}
              icon={faTwitter}
            />
          </a>
          <a
            class="btn github"
            href="https://github.com/SakodaShiho"
            target="blank_"
          >
            <FontAwesomeIcon
              className="fa fa-github"
              style={iconStyle}
              icon={faGithub}
            />
          </a>

          <a
            className="btn qiita"
            href="https://github.com/SakodaShiho"
            target="blank_"
          >
            <img src={qiitaFavicon} className="fa fa-qiita" />
          </a>
        </div>
      </div>
    </div>
  );
};
