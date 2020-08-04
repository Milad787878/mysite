import React, { fragment, useState, useEffect } from "react";
import "./Header.css";

import sharif from "../../img/sharif1.jpg";
import menulogo from "../../img/menu.png";

function Header() {
  const [flag, setFlag] = useState(0);
  const handleClick = () => {
    if (flag === 0) {
      document.getElementsByClassName("sidenav")[0].style.display = "block";
      document.getElementsByClassName("sidenav")[0].style.width = "30%";
      document.getElementsByClassName("sidenav")[0].style.position = "fixed";
      setFlag(1);
    } else if (flag === 1) {
      document.getElementsByClassName("sidenav")[0].style.width = "0";
      document.getElementsByClassName("sidenav")[0].style.display = "none";
      setFlag(0);
    }
  };

  /* useEffect(() => {
    if (document.documentElement.clientWidth >= 980) {
      alert("sf");
      document.getElementsByClassName("sidenav")[0].style.display = "none";
    }
  }); */
  return (
    <div className="header" id="Home">
      <div id="sticky">
        <div className="elements">
          <a href="#Home"> Home </a>
        </div>
        <div className="elements">
          <a href="#Pbody"> Profile </a>
        </div>
        <div className="elements">
          <a href="#Abilities"> Abilities </a>
        </div>
        <div className="elements">
          <a href="#Experiences"> Experiences </a>
        </div>
        <div className="elements">
          <a href="#Education"> Education </a>
        </div>
        <div className="elements">
          <a href="#Contact"> Contact </a>
        </div>
      </div>

      <div id="logomenu">
        <img src={menulogo} alt="logo" id="logo" onClick={handleClick} />
      </div>
      <div className="sidenav">
        <div>
          <a className="item" href="#Home">
            Home
          </a>
        </div>
        <div>
          <a className="item" href="#Pbody">
            Profile
          </a>
        </div>
        <div>
          <a className="item" href="#Abilities">
            Abilities
          </a>
        </div>
        <div>
          <a className="item" href="#Experiences">
            Experiences
          </a>
        </div>
        <div>
          <a className="item" href="#Education">
            Education
          </a>
        </div>
        <div>
          <a className="item" href="#Contact">
            Contact
          </a>
        </div>
      </div>
      <img class="bg-image" src={sharif} />
      <div class="bg-text">
        <h2 id="wellcome"> Wellcome to my website </h2>{" "}
        <h1> I am Milad Alghosi </h1>
        <p> I 'm a Front-end developer</p>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Header;
