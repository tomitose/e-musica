import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="container-aboutus">
      <div className="container-img">
        <img className="img-about" src="/guitars-aboutus.png" alt="guitars" />
      </div>
      <h1 className="title-about">About Guitar Master</h1>
      <div className="text-about">
        <h2>Mission Statement</h2>
        <h4>
          Guitar building is an ongoing process of discovery. We are devoted to
          the guitar's rich heritage while committed to new technologies that
          will enrich our products with uncompromised tone, playability and
          beauty.
        </h4>
        <br />
        <h4>
          Our success depends on our ability to listen, implement positive
          change and continually refine our craft.
        </h4>
        <br />
        <h4>
          Believing this, we strive to build the best guitars and guitar
          products possible and to serve our employees, customers, suppliers and
          community with distinction.
        </h4>
      </div>
    </div>
  );
};

export default AboutUs;
