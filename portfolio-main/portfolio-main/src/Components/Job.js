import React from "react";
import StarIcon from "@material-ui/icons/Star";
import DoneIcon from "@material-ui/icons/Done";
import Divider from "../Components/Divider";

import "./Job.css";

const TimeLine = (props) => {
  const endDate = props.end ? props.end : "Present";
  return (
    <p className="main__timeline">
      {props.start} - {endDate}
    </p>
  );
};

const Learning = (props) => {
  return (
    <div className="learning__container">
      <h3>Experience</h3>
      {props.learning.map((value) => {
        return (
          <div>
            <div className="learning">
              <StarIcon style={{ color: '#04c2c9' }}/>
              <p className="value">{value}</p>
            </div>
            <Divider />
          </div>
        );
      })}
    </div>
  );
};

const Responsibilities = (props) => {
  return (
    <div className="responsibilities__container">
      <h3>Responsibilities</h3>
      {props.responsibilities.map((value) => {
        return (
          <div>
            <div className="responsibilities">
              <DoneIcon style={{ color: 'rgb(227, 27, 109)' }} />
              <p className="value">{value}</p>
            </div>
            <Divider />
          </div>
        );
      })}
    </div>
  );
};

const Main = (props) => {
  return (
    <div className="job__main">
      <p className="main__role">{props.role}</p>
      <h3 className="main__company-name">{props.company_name}</h3>
      <p className="main__location">{props.location}</p>
      <TimeLine start={props.year.start} end={props.year.end} />
    </div>
  );
};

const Description = (props) => {
  return (
    <div className="job__description">
      {props.description.map((mess) => (
        <p>{mess}</p>
      ))}
      <div className="job__description-info-container">
        <div className="job__description-info">
          <Responsibilities responsibilities={props.responsibilities} />
          <Learning learning={props.learning} />
        </div>
      </div>
    </div>
  );
};

const Job = (props) => {
  return (
    <div className="job__container">
      <Main {...props.job} />
      <Description {...props.job} />
    </div>
  );
};

export default Job;
