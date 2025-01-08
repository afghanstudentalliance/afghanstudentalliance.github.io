import React, { useState, useEffect } from "react";
import "../App.css";
import "./HeroSection.css";

function HeroSection2() {
  const images = [
    "/images/Photo1.png",
    "/images/img-8.jpg",
    "/images/img-9.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="hero-container2">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`hero-image ${index === currentIndex ? "active" : ""}`}
        />
      ))}
    </div>
  );
}

export default HeroSection2;
