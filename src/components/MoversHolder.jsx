import React, { useState } from "react";
import RecommendedMoversList from "./RecommendedMoversList";
import MovingCompanyDetails from "./MovingCompanyDetails";

const MoversHolder = () => {
  const [isActive, setIsActive] = useState(false);

  const makeActive = () => setIsActive(true);

  const makeInActive = () => setIsActive(false);
  return (
    <div className={` ${isActive && "w-full"} `}>
      {!isActive ? (
        <RecommendedMoversList makeActive={makeActive} />
      ) : (
        <MovingCompanyDetails makeInActive={makeInActive} />
      )}
    </div>
  );
};

export default MoversHolder;
