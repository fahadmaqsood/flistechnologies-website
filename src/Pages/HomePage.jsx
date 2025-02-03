import React from "react";
import HeroSection from "../component/Home/HeroSection";
import Services from "../component/Home/Services";
import AboutUs from "../component/Home/AboutUs";
import Projects from "../component/Home/Projects";
import Reviews from "../component/Home/Reviews";
import Contact from "../component/Home/Contact";

import { useTitle } from "../utils";

function HomePage() {
  useTitle("Home | Flis Technologies");

  return (
    <>
      <HeroSection />
      <Services />
      <AboutUs />
      <Projects />
      <Reviews />
      <Contact />
    </>
  );
}

export default HomePage;
