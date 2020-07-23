import React from "react";
import Bar from "./Bar";

import "./Skills.css";

const Skills = (props) => {
  return (
    <div className="skills__container">
      <h2>SKILLS</h2>
      <div>
        {props.skills.map((skill) => {
          return <Bar percent={skill.percent} skill={skill.skill_name} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
