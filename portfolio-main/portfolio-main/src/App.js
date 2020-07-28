import React from "react";
import logo from "./logo.svg";

import Main from "./Pages/Main";
import About from "./Pages/About";
import Nav from "./Pages/Nav";
import Projects from "./Pages/Projects";
import Experience from "./Pages/Experience";
import Contact from "./Pages/Contact";
import data from "./data";

import "./App.css";
import Download from "./Components/Download";

const Description = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </div>
  );
};

function App() {
  return (
    <div className="App font" id="app">
      <Main />
      <Nav />
      <About {...data} />
      <Projects />
      <Experience experience={data.Experience} />
      <Contact links = {data.About.links}/>
      <Download/>
    </div>
  );
}

export default App;
