import React from "react";
import { useQuery } from "@tanstack/react-query";
import MoversCard from "./MoversCard";
import { nn } from "date-fns/locale";

const RecommendedMoversList = ({ makeActive }) => {
  const {
    data: quotes,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["quotes"],
    queryFn: async () => {
      const response = await fetch(
        "https://involved-birgit-zinter-cb767b47.koyeb.app/api/Quote/GetAllQuotes?code=123456"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch quotes");
      }

      return response.json();
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });

  if (isLoading) {
    return (
      <div className="ml-4 h-fit w-full recommendContainer">
        <div className="flex items-center justify-center h-64">
          <div className="text-lg text-gray-600">Loading movers...</div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="ml-4 h-fit w-full recommendContainer">
        <div className="flex items-center justify-center h-64">
          <div className="text-lg text-red-600">
            Error loading movers: {error.message}
          </div>
        </div>
      </div>
    );
  }

  const quotesCount = quotes?.length || 0;

  let content = null;
  if (quotesCount === 0) {
    content = (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg text-gray-600">
          No recommended movers found.
        </div>
      </div>
    );
  } else {
    content = (
      <div className="grid grid-cols-2 mb-[30px] moversCardContainer gap-[13px]">
        {quotes?.map((quote, index) => (
          <MoversCard
            key={quote.id || index}
            makeActive={makeActive}
            quoteData={quote}
          />
        ))}
      </div>
    );
  }
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
        {content}
      </div>
    </div>
  );
};

export default RecommendedMoversList;
