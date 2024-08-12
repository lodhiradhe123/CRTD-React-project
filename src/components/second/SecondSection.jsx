// src/components/SecondSection.js
import React from "react";
import "./SecondSection.css";
import { PiStudent } from "react-icons/pi";

const SecondSection = () => {
  return (
    <div className="container">
      <div className="second-section-second">
        <div className="image-container">
          <img
            src={
              "https://images.unsplash.com/photo-1544717305-2782549b5136?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D"
            }
            alt="Left Image"
          />
        </div>
        <div className="content-container">
          <div className="icon-text">
            <PiStudent />
            <span>for college student</span>
          </div>
          <h2>
            <span className="red-text">Assisting</span>{" "}
            <span className="bold-text">Individuals</span>
          </h2>
          <p>
            Discover endless opportunities to advance your career. Our platform
            connects you with top employers, internships, and resources designed
            to elevate your future.
          </p>
          <button className="learn-more-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
