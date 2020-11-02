import React from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import HeroBanner from "./components/HeroBanner";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import ScrollTopBtn from "./components/ScrollTopBtn";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroBanner />
      <ScrollTopBtn />
      <About />
      <Education />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
