import React from "react";

import "./Bar.css";

const Bar = (props) => {
  const percent = `${props.percent}%`;
  return (
    <div className="bar">
      <div className="bar__fill" style={{ width: percent }}>
        <div className="bar__name">{props.skill}</div>
      </div>
      <div className="bar__per">{percent}</div>
    </div>
  );
};

export default Bar;
