import React from "react";
import { PiStudent } from "react-icons/pi";
import "./Third.css";

function Third() {
  return (
    <div className="container-third">
      <div className="second-section-third">
        <div className="content-container-third">
          <div className="icon-text">
            <PiStudent />
            <span>fro B2B</span>
          </div>
          <h2>
            <span className="red-text">Empowering</span>{" "}
            <span className="bold-text">business</span>
          </h2>
          <p>
            Discover endless opportunities to advance your career. Our platform
            connects you with top employers, internships, and resources designed
            to elevate your future.
          </p>
          <button className="learn-more-button">Learn More</button>
        </div>
        <div className="image-container-third">
          <img
            src={
              "https://images.unsplash.com/photo-1721332149371-fa99da451baa?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="Left Image"
          />
        </div>
      </div>
    </div>
  );
}

export default Third;
