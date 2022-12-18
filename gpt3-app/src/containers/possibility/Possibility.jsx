import React from 'react'
import './possibility.css';
import Image from "../../assets/possibility.png";
const Possibility = () => {
  return (
    <div className="gpt3__possiblities" id="possibility">
      <div className="gpt3__possiblities-headImg">
        <img src={Image} alt="Product Showcase Image" />
      </div>

      <div className="gpt3__possibilities-text_Data">
        <p className="blueLink">Request Early Access to Get Started</p>
        <h1 className="gradient__text font">
          The possibilities are beyond your imagination
        </h1>
        <p className="subText">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <p className="getStartedLink">Request Early Access to Get Started</p>
      </div>
    </div>
  );
}

export default Possibility