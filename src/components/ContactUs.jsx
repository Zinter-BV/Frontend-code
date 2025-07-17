import React from "react";
import "./contactUs.css";

const contactUs = () => {
  return (
    <div className="mx-auto w-[100vw]">
      <div className="contact_us_container mx-auto w-[90vw] max-w-[1500px]">
        <div className="contact_us_header">CONTACT US</div>
        <div className="contact_us_text">
          Join us on our journey to redefine logistics with innovation and
          excellence!
        </div>
        <div className="contact_us_partners">
          For inquiries, partnerships, or service bookings, reach out to us at
          📧 support@zinter.nl
        </div>
      </div>
    </div>
  );
};

export default contactUs;
