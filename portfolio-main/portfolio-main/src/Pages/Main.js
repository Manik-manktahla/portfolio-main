import React, { useState } from "react";

import Button from "../Components/Button.js";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

import "./Main.css";
import coverImage from "../static/webdesign_1.jpg";

const Main = (props) => {
  const [buttonHover, setButtonHover] = useState(false);
  document.querySelectorAll('button[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  return (
    <header
      className="main-header"
      style={{
        backgroundImage: `url(${coverImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
      }}
      id="main"
    >
      <div className="main-content">
        <p className="main-intro">
          Hello, I'm <span style={{ color: "#e31b6d" }}>Manik Manktahla</span>.
        </p>
        <p className="main-role">I'm a full-stack web developer.</p>
        <Button
          className="main-button"
          onMouseOver={() => setButtonHover(true)}
          onMouseOut={() => setButtonHover(false)}
          href="#about"
        >
          <p className="main__buttonText">View my Work</p>
          {!buttonHover && <ArrowForwardIcon className="main__button"/>}
          {buttonHover && <ArrowDownwardIcon className="main__button"/>}
        </Button>
      </div>
      <div className="main-transparent" />
    </header>
  );
};

export default Main;
