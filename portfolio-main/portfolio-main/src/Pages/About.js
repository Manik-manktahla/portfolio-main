import React from "react";
import PersonalInfo from "../Components/PersonalInfo";
import Divider from "../Components/Divider";
import "./About.css";
import Skills from "../Components/Skills";

const About = (props) => {
  return (
    <div className="about__container" id="about">
      <h1 className="about__header">ABOUT</h1>
      <Divider className="about__header-divider" />
      <div className="about__subContainer">
        <div className="about__details">
          <PersonalInfo about={props.About} />
          <Skills skills={props.Skills} />
        </div>
      </div>
    </div>
  );
};

export default About;
