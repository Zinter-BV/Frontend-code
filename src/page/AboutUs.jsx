import Header from "../components/Header";
import AboutZinter from "../components/AboutZinter";
import OurMission from "../components/OurMission";
import OurVision from "../components/OurVision";
import OurServices from "../components/OurServices";
// import Testimonials from "../components/Testimonials";
import TestimonialsAboutUs from "../components/TestimonialsAbout";
import ContactUs from "../components/ContactUs";
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

// import Header from "../components/Header";
// import AboutZinter from "../components/AboutZinter";
// import OurMission from "../components/OurMission";
// import OurVision from "../components/OurVision";
// import OurServices from "../components/OurServices";
// import ContactUs from "../components/ContactUs";
// import Testimonials from "../components/Testimonials";
// import Footer from "../components/Footer";
// import { useEffect } from "react";
// import { Helmet } from "react-helmet-async";

// const AboutUs = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   return (
//     <>
//       <Helmet>
//         <title>Zinter – About Us </title>
//         <meta
//           name="description"
//           content="Zinter – Fast and reliable moving and tracking services."
//         />
//         <meta name="keywords" content="moving, tracking, Zinter, logistics" />
//         <meta property="og:title" content="Zinter – About" />
//         <meta
//           property="og:description"
//           content="Zinter – Fast and reliable moving and tracking services."
//         />
//         <meta property="og:url" content="https://zinter.nl/about-us" />
//         <meta property="og:type" content="website" />
//       </Helmet>
//       <div>
//         <Header />
//         <AboutZinter />
//         <OurMission />
//         <OurVision />
//         <OurServices />
//         <Testimonials />
//         <ContactUs />
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default AboutUs;
