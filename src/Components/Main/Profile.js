import React from "react";
import "./profile.css";

import me from "../../img/me2.jpg";

function Profile() {
  return (
    <React.Fragment>
      <br id="Pbody" />
      <br />
      <br />
      <div>
        <h1> Profile </h1>
        <hr className="profline" />
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4">
              <h2> About me </h2> <hr className="aboutdetailline" />
              <div id="aboutme">
                <p id="mainsentence"> I am a Front-end developer </p>
                <p>
                  I am a student of Petroleum Engineering at
                  <a href="http://www.sharif.ir/home" id="uni">
                    Sharif University of Technology
                  </a>
                  and I am very interested in programming.I am very interested
                  in site design, especially client - side programming, and I
                  try to get better every day.After mastering the user side
                  programming, I would like to learn back end and become a full
                  stack developer.My interest and knowledge in programming does
                  not end here I also know Python and MATLAB and use them in
                  university projects I can learn anything I want
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img src={me} id="me" className="img-thumbnail" />
            </div>
            <div className="col-md-4">
              <h2> Detail </h2> <hr className="aboutdetailline" />
              <div>
                <p> Firstname: Milad(Mohammadjavad) </p>
                <p> Lastname: Alghosi </p> <p> Age: 21 </p>
                <p> University: Sharif university of Technology </p>
                <p> University major: Petroleum Engineering </p>
                <p> Address: Iran, Mazandaran, chalus </p>
                <p> Gmail: Javad.alghosi7904 @gmail.com </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /> <br /> <br />
    </React.Fragment>
  );
}

export default Profile;
