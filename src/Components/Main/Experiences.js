import React from "react";

import "./Experiences.css";

import sharif from "../../img/shariflogo.jpg";
import daal from "../../img/daallogo.png";
import mizan from "../../img/mizanlogo.jpg";

export default function Experiences() {
  return (
    <React.Fragment>
      <br id="Experiences" />
      <br /> <br />
      <h1>Experiences</h1>
      <hr className="Experiences" />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <p>
              I am a member of the Front-end programming team at the
              <a
                href="http://gamein.ie.sharif.ir/homePage-test"
                id="Gamein"
                target="_blank"
              >
                Gamein2020
              </a>
              event, which is the largest student event in the country in the
              field of industrial engineering. This event is organized by Sharif
              University
            </p>
            <img src={sharif} alt="gamein" className="logo" />
          </div>
          <div className="col-md-4">
            <p>
              At
              <a href="http://daalapp.com/" id="Daal" target="_blank">
                Daal
              </a>
              , I was in charge of application testing, I was a member of the
              executive team for a while, and I was also in charge of Daal
              support I'm really happy to be in Dal There I met people who made
              me progress and enter the field of programming
            </p>
            <img src={daal} alt="daal" className="logo" />
          </div>
          <div className="col-md-4">
            <p>
              In
              <a href="https://mizan.institute/" id="Mizan" target="_blank">
                Mizan Gostaran Sharif
              </a>{" "}
              Company, I was a member of the advertising team of the country's
              employment test.I gained a lot of good experience working in a big
              company I was a member of the advertising team and gained
              experience in this field
            </p>
            <img src={mizan} alt="mizan" className="logo" />
          </div>
        </div>
      </div>
      <br /> <br /> <br />
    </React.Fragment>
  );
}
