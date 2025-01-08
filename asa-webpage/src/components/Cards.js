import React from "react";
import "./Cards.css";
import { Button } from "./Button";

function Cards() {
  return (
    <>
      <div className="cards">
        <div className="cards-content">
          <h1>Who we are</h1>
          <p>
            We are a student organization dedicated to connecting the Afghan
            community within Columbia University's campus and the broader NYC
            region. Our mission includes fostering a strong sense of unity and
            pursuing humanitarian initiatives globally.
          </p>
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            About us
          </Button>
        </div>
        <div className="cards-image">
          <img src="/images/img-1.jpg" alt="Afghan Students Alliance" />
        </div>
      </div>
      <div className="cards">
        <div className="cards-content">
          <h1>Our initiatives</h1>
          <p>
            We host events on campus to connect the Afghan community and broader
            NYC area, and lead humanitarian initiatives to support Afghans
            worldwide, including our mentorship program.
          </p>
        </div>
        <div className="cards-image">
          <img src="/images/img-1.jpg" alt="Afghan Students Alliance" />
        </div>
      </div>
    </>
  );
}

export default Cards;
