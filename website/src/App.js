import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import Navigation from "./components/Nav/Navigation";
import Home from "./components/Home/Home";
import AboutMe from "./components/About/AboutMe";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

import "./App.js";
import "./App.scss";
import "./components/Nav/Navigation.scss";
import "./components/Button/Button.scss";

function App() {
  useEffect(() => {});
  return (
    <div className="main__container">
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/about me" element={<AboutMe />} />
          <Route path="/skill" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
