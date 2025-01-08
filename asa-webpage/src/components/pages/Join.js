import React from "react";
import "../pages/Join.css";
import Footer from "../Footer";

export default function JoinUs() {
  return (
    <>
      <div className="join-us-container">
        <iframe
          title="Join Us Form"
          src="https://forms.gle/uA6SKBvVQVzGdmMK7"
          className="join-us-iframe"
          scrolling="yes"
        />
      </div>
      <Footer />
    </>
  );
}
