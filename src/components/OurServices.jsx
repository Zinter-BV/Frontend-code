import React from "react";
import residentalMoving from "../Assets/residential-moving.svg";
import customizeMoving from "../Assets/customize-moving.svg";
import customerSolution from "../Assets/customer-solution.svg";
import technologyLogistics from "../Assets/technology-logistics.svg";
import imageRecognition from "../Assets/image-recognition.svg";
import "./ourServices.css";

const ourServices = () => {
  return (
    <div className="mx-auto w-full">
      <div className="services_container mx-auto w-[90vw] max-w-[1500px]">
        <div className="our_services_container w-full mb-3">
          <div>Our Services</div>
          <div>Zinter BV does not carry out moves directly</div>
          <div>
            Instead, we connect customers with trusted and professional
            third-party moving service providers. We ensure a seamless booking
            and logistics experience by leveraging technology to match users
            with the best available movers. Our services include
          </div>
        </div>
        <div>
          <div className="our_services_card_container">
            <div className="our_services_card">
              <img src={residentalMoving} alt="" />
              <h3>Residential Moving</h3>
              <span>
                Tailored solutions for individuals and families moving to new
                homes
              </span>
            </div>
            <div className="our_services_card">
              <img src={customizeMoving} alt="" />
              <h3>Commercial Moving</h3>
              <span>
                Efficient and reliable business relocations with minimal
                downtime
              </span>
            </div>
            <div className="our_services_card">
              <img src={customerSolution} alt="" />
              <h3>Customized Solutions</h3>
              <span>
                Personalized services to meet unique transportation needs
              </span>
            </div>
          </div>
          <div className="our_services_card_sub_container">
            <div className="our_services_card_sub">
              <img src={technologyLogistics} alt="" />
              <h3>Technology-Driven Logistics</h3>
              <span>
                As a logistics tech company, Zinter BV integrates advanced
                technology to optimize processes and enhance the customer
                experience
              </span>
            </div>
            <div className="our_services_card_sub">
              <img src={imageRecognition} alt="" />
              <h3>AI Image Recognition for Inventory</h3>
              <span>
                Enhancing inventory management by leveraging AI to accurately
                recognize, categorize, and track items, making moves more
                efficient and organized.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ourServices;
