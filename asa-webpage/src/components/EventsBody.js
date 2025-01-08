import React from "react";
import "./EventsBody.css";

function EventsBody() {
  return (
    <div className="events-container">
      <div className="events-intro">
        <h1>Our Events</h1>
        <p>
          The Columbia Afghan Student Alliance (ASA) hosts two signature events
          each year:
          <strong> Shab-e Yalda</strong> at the end of the Fall semester and
          <strong> Nowruz</strong> during the Spring semester. These
          celebrations bring the community together to honor Afghan culture,
          heritage, and traditions.
        </p>
      </div>

      <div className="events-section">
        <div className="event">
          <h2>Shab-e Yalda</h2>
          <p>
            Shab-e Yalda, or the "Night of Yalda," is celebrated on the winter
            solstice, marking the longest night of the year. It is a time when
            family and friends gather to enjoy poetry, music, and traditional
            foods such as pomegranates and nuts. For Afghans, Yalda is a
            celebration of light, renewal, and cultural heritage.
          </p>
          <div className="event-images">
            <img src="/images/yalda1.jpg" alt="Shab-e Yalda Celebration" />
            <img src="/images/yalda2.jpg" alt="Yalda Feast" />
            <img src="/images/yalda3.jpg" alt="Traditional Afghan Poetry" />
          </div>
        </div>

        <div className="event">
          <h2>Nowruz</h2>
          <p>
            Nowruz, or "New Day," is the Persian New Year celebrated on the
            first day of Spring. It symbolizes renewal, hope, and new
            beginnings. In Afghanistan, families prepare the Haft Sin table with
            symbolic items and enjoy festivities including music, dancing, and
            traditional dishes. Nowruz is a cherished cultural event that brings
            the community together.
          </p>
          <div className="event-images">
            <img src="/images/nowruz1.jpg" alt="Nowruz Table" />
            <img src="/images/nowruz2.jpg" alt="Nowruz Celebration" />
            <img src="/images/nowruz3.jpg" alt="Springtime Festivities" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsBody;
