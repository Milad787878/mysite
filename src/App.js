import React from "react";
import "./App.css";
import $ from "jquery";

import Header from "./Components/common/Header";
import Profile from "./Components/Main/Profile";
import Abilities from "./Components/Main/Abilities";
import Experiences from "./Components/Main/Experiences";
import Education from "./Components/Main/Education";
import Footer from "./Components/common/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Abilities />

      <Experiences />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
