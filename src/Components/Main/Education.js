import React from "react";
import "./Education.css";

import react from "../../img/Reactcert.png";
import front from "../../img/Frontcert.png";
import matlab from "../../img/Matlabcert.png";
import python from "../../img/Pythoncert.png";

export default function Education() {
  const handleModalfront = () => {
    document.getElementById("myModalfront").style.display = "block";
  };
  const handleClosefront = () => {
    document.getElementById("myModalfront").style.display = "none";
  };
  /*************************************************************************/
  const handleModalreact = () => {
    document.getElementById("myModalreact").style.display = "block";
  };
  const handleClosereact = () => {
    document.getElementById("myModalreact").style.display = "none";
  };
  /*************************************************************************/
  const handleModalpython = () => {
    document.getElementById("myModalpython").style.display = "block";
  };
  const handleClosepython = () => {
    document.getElementById("myModalpython").style.display = "none";
  };
  /*************************************************************************/
  const handleModalmatlab = () => {
    document.getElementById("myModalmatlab").style.display = "block";
  };
  const handleClosematlab = () => {
    document.getElementById("myModalmatlab").style.display = "none";
  };
  return (
    <React.Fragment>
      <br id="Education" />
      <br />
      <br />
      <h1>Education</h1>
      <hr className="Education" />
      <div className="container">
        <div className="row">
          <div className="col-md-6" id="general">
            <h3 className="justformargin">General</h3>
            <hr id="Gsubline" />
            <h5 className="disc">
              1. Undergraduate student of Petroleum Engineering, Sharif
              University of Technology
            </h5>
            <h5 className="disc">
              2.Talented high school student in Chalous city, Mazandaran
              province
            </h5>
          </div>
          <div className="col-md-6">
            <h3 className="justformargin">Programming</h3>
            <hr id="Gsubline" />
            <div className="row">
              <button
                type="button"
                className="formarg btn btn-primary"
                onClick={handleModalfront}
              >
                Fron-end certificate
              </button>
              <div id="myModalfront" class="modalfront">
                <div class="modal-contentfront">
                  <div class="modal-headerfront">
                    <span onClick={handleClosefront} class="closefront">
                      &times;
                    </span>
                  </div>
                  <div class="modal-bodyfront">
                    <img src={front} id="front" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <button
                type="button"
                onClick={handleModalreact}
                className="formarg btn btn-success"
              >
                ReactJS certificate
              </button>
              <div id="myModalreact" class="modalreact">
                <div class="modal-contentreact">
                  <div class="modal-headerreact">
                    <span onClick={handleClosereact} class="closereact">
                      &times;
                    </span>
                  </div>
                  <div class="modal-bodyreact">
                    <img src={react} id="react" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <button
                type="button"
                onClick={handleModalpython}
                className="formarg btn btn-danger"
              >
                Python certificate
              </button>
              <div id="myModalpython" class="modalpython">
                <div class="modal-contentpython">
                  <div class="modal-headerpython">
                    <span onClick={handleClosepython} class="closepython">
                      &times;
                    </span>
                  </div>
                  <div class="modal-bodypython">
                    <img src={python} id="python" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <button
                type="button"
                onClick={handleModalmatlab}
                className="formarg btn btn-warning"
              >
                MATLAB certificate
              </button>
              <div id="myModalmatlab" class="modalmatlab">
                <div class="modal-contentmatlab">
                  <div class="modal-headermatlab">
                    <span onClick={handleClosematlab} class="closematlab">
                      &times;
                    </span>
                  </div>
                  <div class="modal-bodymatlab">
                    <img src={matlab} id="matlab" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluied">
        <div id="animatedDiv"></div>
      </div>
      <div className="container">
        <h3 style={{ textAlign: "cnter" }} className="mt-5">
          I learned all the programming skills
          <span style={{ fontWeight: "bold", color: "red", margin: "0 1%" }}>
            myself
          </span>
          Without enrolling in a school and going to a programming class
        </h3>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </React.Fragment>
  );
}
