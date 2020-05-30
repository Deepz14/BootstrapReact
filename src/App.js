import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}
