import React from "react";
import stepIcon from "../Assets/_Step icon base.svg";
import connectorIcon from "../Assets/Connector.svg";
import "./ourMission.css";

const ourMission = () => {
  return (
    <div className="container">
      <div className="hassle_steps_container">
        <p className="hassle_steps_text">HASSLE FREE MOVE</p>
        <div className="steps">
          <img src={stepIcon} alt="" />
          <img className="connectorLine" src={connectorIcon} alt="" />
          <img src={stepIcon} alt="" />
        </div>
      </div>
      <div className="our_mission_text_container">
        <div className="our_mission_text">
          <h2>
            Our mission is to revolutionize the logistics industry by offering
            seamless, tech-driven solutions
          </h2>
          <p>
            That simplify and optimize the moving experience for individuals and
            businesses alike. Zinter BV is committed to innovation, efficiency,
            and customer satisfaction.
          </p>
        </div>
        <div className="location_establish">
          <div className="location">
            <span>Founded</span>
            <h2>2024</h2>
          </div>
          <div className="ddd location">
            <span>Location</span>
            <h2>Netherlands</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ourMission;
