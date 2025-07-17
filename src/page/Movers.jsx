import React from "react";
import QuoteHeader from "../components/QuoteHeader";
import MoversContainer from "../components/MoversContainer";
import { useLocation } from "react-router-dom";

const Movers = () => {
  const location = useLocation();
  const trackingCode = location.state?.data;

  return (
    <div>
      <QuoteHeader />
      <MoversContainer trackingCode={trackingCode} />
    </div>
  );
};

export default Movers;
