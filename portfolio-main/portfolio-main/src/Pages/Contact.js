import React from "react";
import Divider from "../Components/Divider";
import ContactForm from "../Components/Contact-form";
import FastForwardIcon from "@material-ui/icons/FastForward";

import "./Contact.css";
import ShareIcons from "../Components/ShareIcons";

const Contact = (props) => {
  return (
    <div className="contact__container" id="contact">
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 100 102"
        height="75"
        width="100%"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        class="svgcolor-light"
      >
        <path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white"></path>
      </svg>
      <h1 className="contact__header">CONTACT ME</h1>
      <Divider className="contact__header-divider" />
      <p className="contact__question">
        Have a question or want to work together?
      </p>

      <ContactForm />
      <div className="contact__bottom">
        <FastForwardIcon
          className="contact__upIcon"
          onClick={() =>
            document.getElementById("main").scrollIntoView({
              behavior: "smooth",
            })
          }
        />
        <div className="contact__share">
          <ShareIcons links={props.links} className="contact__icon" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
