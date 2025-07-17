import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import GetQuote from "./page/GetQuote";
import AboutUs from "./page/AboutUs";
import Movers from "./page/Movers";
import EnterTrackCode from "./page/EnterTrackCode";
import "./App.css";
import MakeAReport from "./page/MakeAReport";
import TrackReport from "./page/TrackReport";
import Faq from "./page/Faq";
import PrivacyPolicy from "./page/PrivacyPolicy";
import TermsAndCondition from "./page/TermsAndCondition";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quote" element={<GetQuote />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/movers" element={<Movers />} />
      <Route path="/track-code" element={<EnterTrackCode />} />
      <Route path="/make-report" element={<MakeAReport />} />
      <Route path="/track-report" element={<TrackReport />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsAndCondition />} />
    </Routes>
  );
}

export default App;
