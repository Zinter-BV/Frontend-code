import React from "react";
import RecommendedMoversList from "./RecommendedMoversList";
import MovingCompanyDetails from "./MovingCompanyDetails";

const MoversHolder = ({ isActive, setIsActive }) => {
  const makeActive = () => setIsActive(true);

  const makeInActive = () => setIsActive(false);
  return (
    <div className={"w-full"}>
      {!isActive ? (
        <RecommendedMoversList makeActive={makeActive} />
      ) : (
        <MovingCompanyDetails makeInActive={makeInActive} />
      )}
    </div>
  );
};

export default MoversHolder;
