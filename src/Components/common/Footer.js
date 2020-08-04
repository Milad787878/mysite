import React from "react";

import "./Footer.css";

import instagrm from "../../img/instagram.png";
import telegram from "../../img/telegram.png";
import linkedin from "../../img/linkedin.png";

function Footer() {
  return (
    <div id="Contact">
      <div className="container-fluid">
        <h1> Contact </h1> <br />
        <h2>
          <q className="King">
            Be so progressive that you do not have the opportunity to criticize
            others
          </q>
        </h2>
        <h3 className="King"> -Olympic champion, Hasan yazdani </h3> <br />
        <div id="social">
          <a
            href="https://www.instagram.com/mohammadjavad_alghosi78/"
            className="socialMargin"
          >
            <img src={instagrm} alt="Instagram" className="icon" />
          </a>
          <a href="https://t.me/Aqc_78" className="socialMargin">
            <img src={telegram} alt="Telegram" className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/javad-alghosi-8837b2189/"
            className="socialMargin"
          >
            <img src={linkedin} alt="Linkedin" className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
