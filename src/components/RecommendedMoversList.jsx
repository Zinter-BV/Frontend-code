import React from "react";
import { useQuery } from "@tanstack/react-query";
import MoversCard from "./MoversCard";

import axios from "axios";

// API function to fetch quotes
const fetchQuotes = async () => {
  const response = await axios.get(
    "https://involved-birgit-zinter-cb767b47.koyeb.app/api/Quote/GetAllQuotes?code=ITTpPc"
  );

  return response.data;
};

const RecommendedMoversList = ({ makeActive }) => {
  const {
    data: quotes,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["quotes"],
    queryFn: fetchQuotes,
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
  });

  // Loading state
  if (isLoading) {
    return (
      <div className="ml-4 h-fit w-full recommendContainer">
        <div className="overflow-y-scroll h-[500px] pb-[70px] custom-scroll">
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading movers...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (isError) {
    return (
      <div className="ml-4 h-fit w-full recommendContainer">
        <div className="overflow-y-scroll h-[1200px] pb-[70px] custom-scroll">
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <p className="text-red-600 mb-4">
                Error loading movers: {error.message}
              </p>
              <button
                onClick={() => refetch()}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  console.log(quotes);

  // Success state with data
  const quotesCount = quotes?.result?.length || 0;

  return (
    <div className="ml-4 h-fit w-full recommendContainer">
      <div className="overflow-y-scroll h-[1200px] pb-[70px] custom-scroll">
        <div className="flex items-center w-full justify-between">
          <div className="flex mb-4 items-center">
            <h3 className="mr-2 font-sans text-[20px] font-bold text-[#121212]">
              Showing
            </h3>
            <p className="font-sans text-[20px] font-semibold italic text-[#9e9e9e]">
              {quotesCount} Recommended Movers
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 mb-[30px] moversCardContainer gap-[13px]">
          {quotes && quotes?.result?.length > 0 ? (
            quotes?.result?.map((quote, index) => (
              <MoversCard
                key={quote.id || index}
                makeActive={makeActive}
                quoteData={quote}
              />
            ))
          ) : (
            <div className="col-span-2 text-center py-8">
              <p className="text-gray-600">No movers found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecommendedMoversList;
