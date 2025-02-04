import React from "react";
import img1 from "../../imgs/GameDesign.png";
import "../../css/HeroSection.css"; // Include updated CSS

function HeroSection() {
  return (
    <section className="hero-container">
      <div className="hero-text">
        <h1>
          Transforming Ideas into{" "}
          <span className="highlight">Digital Reality</span>
        </h1>
        <p>
          We are a passionate team of software developers specializing in Web
          Development, Mobile App Development, and AI-Powered Solutions.
        </p>
        <button
          onClick={() => {
            window.location.href = "#contact";
          }}
          className="hero-btn"
        >
          Let's get started!
        </button>
      </div>
      <img src={img1} alt="Hero" className="hero-image" />
    </section>
  );
}

export default HeroSection;
