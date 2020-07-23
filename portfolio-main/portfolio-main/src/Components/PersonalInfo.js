import React from "react";
import ShareIcons from "./ShareIcons";
import "./PersonalInfo.css";
import personalPhoto from "../static/Untitled.png";

const PersonalInfo = (props) => {
  document.querySelectorAll('div[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  return (
    <div className="personal-info__container">
      <img src={personalPhoto} className="personal-info__photo" />
      <h2>
        Manik <br />
        Manktahla
      </h2>
      <ShareIcons links={props.about.links} className="info__share"/>

      {props.about.about_work.map((mess) => {
        return <p>{mess}</p>;
      })}

      <div href="#contact" className="personal-info__contact">Want to connect?</div>
    </div>
  );
};

export default PersonalInfo;
