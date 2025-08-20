import Header from "../components/Header";
import AboutZinter from "../components/AboutZinter";
import OurMission from "../components/OurMission";
import OurVision from "../components/OurVision";
import OurServices from "../components/OurServices";
// import Testimonials from "../components/Testimonials";
import TestimonialsAboutUs from "../components/TestimonialsAbout";
import ContactUs from "../components/ContactUs"
import Testimonials from "../components/Testimonials";
// import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <AboutZinter />
      <OurMission />
      <OurVision />
      <OurServices />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default AboutUs;
