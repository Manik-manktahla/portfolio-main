import React from "react";

import Divider from "../Components/Divider";
import Project from "../Components/Project";

import netflix_image from "../static/Netflix-dummy.png";
import inquiry_redesign from "../static/inquiry3.png";
import fraudSeller from "../static/fraudSeller.png";
import pos from "../static/POS.png";
import "./Projects.css";

import netflix1 from "../static/Netflix/Screenshot 2020-07-23 at 1.46.44 PM.png";
import netflix2 from "../static/Netflix/Screenshot 2020-07-23 at 1.47.07 PM.png";

import fraud1 from "../static/Fraud/Screenshot 2020-07-23 at 1.50.46 PM.png";
import fraud2 from "../static/Fraud/Screenshot 2020-07-23 at 1.50.59 PM.png";

import POS1 from "../static/POS/Screenshot 2020-07-23 at 1.50.00 PM.png";
import POS2 from "../static/POS/Screenshot 2020-07-23 at 1.50.05 PM.png";

import inquiry1 from "../static/Inquiry/Screenshot 2020-07-23 at 1.52.00 PM.png";
import inquiry2 from "../static/Inquiry/Screenshot 2020-07-23 at 1.52.20 PM.png";
import inquiry3 from "../static/Inquiry/Screenshot 2020-07-23 at 1.52.39 PM.png";

const Projects = (props) => {
  return (
    <div className="projects__container" id="projects">
      <h1 className="projects__header">PROJECTS</h1>
      <Divider className="projects__header-divider" />
      <div className="projects__contents">
        <div className="projects__row">
          <Project
            image={netflix_image}
            project_name="Netflix Clone"
            project_skills="ReactJS / Firebase"
            project_description="Build a clone of the netflix website. It includes the main page for now. Work is in progress. I have used omdb api to get all the movies and movie trailer api to get movie trailers"
            images={[netflix1, netflix2]}
            live="https://netflix-dummy.web.app/"
          />
          <Project
            image={inquiry_redesign}
            project_name="PayPal Resolution Center"
            project_skills="ReactJS / NodeJS / Ajax"
            project_description="Worked in collaboration in building the inquiry resolution center of PayPal. The project includes building both the frontend UI as well as the backend api calls"
            images={[inquiry1, inquiry2, inquiry3]}
          />
          <Project
            image={fraudSeller}
            project_name="Dispute Option"
            project_skills="F0(internal) / NodeJS"
            project_description="The project involved creating a new dispute option in the resolution center of PayPal. It was build to avoid confusion between the already existing dispute options. Experimentation is live now."
            images={[fraud1, fraud2]}
          />
        </div>
        <div className="projects__row">
          <Project
            image={pos}
            project_name="Proof of Shipment"
            project_skills="Python / ReactJS"
            project_description="The project involved uploading a shipment tracking slip image and then extracting the tracking number as well as the tracking company from image."
            images={[POS1, POS2]}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
