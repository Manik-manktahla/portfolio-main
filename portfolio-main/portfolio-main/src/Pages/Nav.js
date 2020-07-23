import React, { useEffect, useState } from "react";

import "./Nav.css";

const Nav = (props) => {
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    });
    return () => {
      window.removeEventListener("scroll",
      () => {});
    };
  }, []);

  document.querySelectorAll('div[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  return (
    <nav className={`nav-items ${fixed && "nav-fixed"}`}>
      <div className="nav-item" href="#about">About</div>
      <div className="nav-item" href="#projects">Projects</div>
      <div className="nav-item" href="#experience">Experience</div>
      <div className="nav-item" href="#contact">Contact</div>
    </nav>
  );
};

export default Nav;
