import React from "react";
import QuoteHeader from "../components/QuoteHeader";
import QuoteContainer from "../components/QuoteContainer";
import { useLocation } from "react-router-dom";

const GetQuote = () => {
  const location = useLocation();
  const data = location.state?.data;
  console.log(data);
  return (
    <div className="relative">
      <QuoteHeader />
      <QuoteContainer data={data} />
    </div>
  );
};

export default GetQuote;
