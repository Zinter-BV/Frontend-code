import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import MoveDetails from "../components/MoveDetails";
import TrustedBy from "../components/TrustedBy";
import SellingPoint from "../components/SellingPoint";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="relative">
      <Header />
      <HeroSection />
      <MoveDetails />
      <TrustedBy />
      <SellingPoint />
      <Process />
      <Testimonials />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
