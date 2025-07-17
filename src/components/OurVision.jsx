import React from "react";
import userSatisfaction from "../Assets/user-satisfaction.svg";
import innovation from "../Assets/innovation.svg";
import simplicity from "../Assets/simplicity.svg";
import "./ourVision.css";

const ourVision = () => {
  return (
    <div className="mx-auto bg-[#121212] w-full ">
      <div className="container_our_vision mx-auto w-[90vw] max-w-[1500px]">
        <div className="first_container_vision">
          <h2>Our Vision</h2>
          <div>
            <div className="card_our_vision">
              <div className="first_card">
                <img src={userSatisfaction} alt="Thumbs Up Icon" />
                <div className="first_card_text">
                  <span>User Satisfaction</span>
                  <span>
                    Duis aute irure dolor in reprehen derit in voluptate velit
                    esse
                  </span>
                </div>
              </div>
              <div className="first_card diff_class">
                <img src={innovation} alt="" />
                <div className="first_card_text">
                  <span>Innovation</span>
                  <span>
                    Duis aute irure dolor in reprehen derit in voluptate velit
                    esse
                  </span>
                </div>
              </div>
              <div className="first_card">
                <img src={simplicity} alt="" />
                <div className="first_card_text">
                  <span>Simplicity</span>
                  <span>
                    Duis aute irure dolor in reprehen derit in voluptate velit
                    esse
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="second_container_vision">
          <h2>
            At Zinter, we envision a world where logistics is streamlined,
            intelligent, and effortless.
          </h2>
          <span>
            By leveraging cutting-edge technology, aim to provide a hassle-free
            experience that eliminates common challenges associated with moving
            and transportation services. Our goal is to create an
            all-encompassing logistics infrastructure that caters to diverse
            needs, from residential relocations to commercial moves.
          </span>
          <button className="get_started_btn">GET STARTED</button>
        </div>
      </div>
    </div>
  );
};

export default ourVision;
