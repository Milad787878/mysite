import React from "react";

import "./Abilities.css";

import html from "../../img/html5.png";
import css from "../../img/css-3-logo.png";
import js from "../../img/javascript.png";
import boots from "../../img/bootstrap.png";
import re from "../../img/React.png";
import sass from "../../img/sass.jpg";
import jq from "../../img/jquery.png";
import python from "../../img/python.png";
import matlab from "../../img/matlablogo.png";

function Abilities() {
  return (
    <React.Fragment>
      <br id="Abilities" />
      <br />
      <br />
      <div>
        <h1>Abilities</h1>
        <hr className="abline" />
      </div>
      <h2 className="marg">Front-end</h2>
      <hr className="fline" />
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div
            className="card col-md-2 col-sm-4 col-6"
            style={{ width: "10%" }}
          >
            <img className="card-img-top" src={html} alt="html" />
            <div className="card-body">
              <p className="card-text">HTML5</p>
            </div>
          </div>
          <div
            className="card col-md-2 col-sm-4 col-6"
            style={{ width: "10%" }}
          >
            <img className="card-img-top" src={css} alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">CSS3</p>
            </div>
          </div>
          <div
            className="card col-md-2 col-sm-4 col-6"
            style={{ width: "10%" }}
          >
            <img className="card-img-top" src={js} alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">JavaScript</p>
            </div>
          </div>
          <div
            className="card col-md-2 col-sm-4 col-6"
            style={{ width: "10%" }}
          >
            <img className="card-img-top" src={boots} alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">Bootstrap</p>
            </div>
          </div>
          <div
            className="card col-md-2 col-sm-4 col-6"
            style={{ width: "10%" }}
          >
            <img className="card-img-top" src={re} alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">React</p>
            </div>
          </div>
          <div
            className="card col-md-2 col-sm-4 col-6"
            style={{ width: "10%" }}
          >
            <img className="card-img-top" src={jq} alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">jQuery</p>
            </div>
          </div>

          <div
            className="card col-md-2 col-sm-4 col-6"
            style={{ width: "10%" }}
          >
            <img className="card-img-top" src={sass} alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">SASS</p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="marg">General</h2>
      <hr className="fline" />
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div
            className="card col-md-2 col-sm-4 col-6"
            style={{ width: "10%" }}
          >
            <img className="card-img-top" src={python} alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">Python</p>
            </div>
          </div>
          <div
            className="card col-md-2 col-sm-4 col-6"
            style={{ width: "10%", height: "30%" }}
          >
            <img className="card-img-top" src={matlab} alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">MATLAB</p>
            </div>
          </div>
        </div>
      </div>
      <br /> <br /> <br />
    </React.Fragment>
  );
}

export default Abilities;
