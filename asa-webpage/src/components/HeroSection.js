import React, { useState, useEffect } from "react";
import "../App.css";
import "./HeroSection.css";

function HeroSection() {
  const images = [
    "/images/Photo1.png",
    "/images/img-2.jpg",
    "/images/img-3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="hero-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`hero-image ${index === currentIndex ? "active" : ""}`}
        />
      ))}
      <h1>Columbia Afghan Student Alliance</h1>
      <p>Connecting the Afghan community at Columbia and beyond</p>
    </div>
  );
}

export default HeroSection;
