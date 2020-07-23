import React from "react";
import Job from "../Components/Job";
import Divider from "../Components/Divider";
import "./Experience.css";

const Experience = (props) => {
  return (
    <div className="experience__container" id="experience">
      <h1 className="about__header">EXPERIENCE</h1>
      <Divider className="about__header-divider" />
      <div className="experience__subcontainer">
        <div className="experience__contents">
          {props.experience.map((job) => (
            <Job job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
