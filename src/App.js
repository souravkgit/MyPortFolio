// import { Routes, Route } from "react-router-dom";
// import { useEffect, useState } from "react";
import Header from "./components/Header/Header.js";
import Home from "./components/Home/Home.js";
import Project from "./components/Projects/Project.js";
import Contact from "./components/Contact/Contact.js";
import About from "./components/About/About.js";
import Blog from "./components/Blog/Blog.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Project />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
