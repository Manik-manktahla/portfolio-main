import React, { useState } from "react";
import SimpleModal from "./Modal";

import "./Project.css";

const images = [
  "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  "https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80",
  "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80",
  "https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80",
];

const Project = (props) => {
  const [hover, setHover] = useState(false);
  const [modal, setModal] = useState(false);

  const hoverDisable = () => setHover(false);
  return (
    <div className="project__container">
      <div
        className={`project__main`}
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundSize: "contain",
          backgroundPosition: "center bottom",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className={`project__sub ${hover && "project__index"}`}>
          <p className="project__name">
            {props.project_name}
            <br />{" "}
            <span className="project__skills">{props.project_skills}</span>
          </p>
          <SimpleModal images={props.images} name={props.project_name} description={props.project_description} hoverDisable={hoverDisable} live={props.live}/>
        </div>
      </div>
    </div>
  );
};

export default Project;
