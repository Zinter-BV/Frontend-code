import React from "react";
import QuoteHeader from "../components/QuoteHeader";
import QuoteContainer from "../components/QuoteContainer";

const GetQuote = () => {
  return (
    <div className="relative">
      <QuoteHeader />
      <QuoteContainer />
    </div>
  );
};

export default GetQuote;
