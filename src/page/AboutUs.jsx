import React from "react";
import Header from "../components/Header";
import AboutZinter from "../components/AboutZinter";
import OurMission from "../components/OurMission";
import OurVision from "../components/OurVision";
import OurServices from "../components/OurServices";
import Testimonials from "../components/Testimonials";
// import TestimonialsAboutUs from "../components/TestimonialsAbout";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <AboutZinter />
      <OurMission />
      <OurVision />
      <OurServices />
      {/* <TestimonialsAboutUs/> */}
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default AboutUs;
