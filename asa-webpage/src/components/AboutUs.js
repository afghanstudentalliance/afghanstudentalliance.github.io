import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <div className="about-us-text">
          <h1>About Us</h1>
          <p>
            The Columbia Afghan Student Alliance (ASA) is a student organization
            dedicated to empowering Afghans at Columbia University and beyond.
            Our mission focuses on fostering unity through social events,
            humanitarian initiatives, and community outreach programs. Together,
            we aim to build a stronger, more connected Afghan community.
          </p>
        </div>
        <div className="about-us-image">
          <img src="/images/img-1.jpg" alt="Columbia Afghan Student Alliance" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
