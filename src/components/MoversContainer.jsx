import React, { useState } from "react";
import StaticMoversStepper from "./StaticMoversStepper";
import MoversProgress from "./MoversProgress";
import Payment from "./Payment";
import TrackMove from "./TrackMove";
import MoversHolder from "./MoversHolder";

const MoversContainer = () => {
  const [activeTab, setActiveTab] = useState(1);

  let content = <MoversHolder />;
  // let btnText = CONTINUE

  switch (activeTab) {
    case 1:
      content = <MoversHolder />;
      // Code to be executed if expression matches value1
      break;
    case 2:
      content = <Payment />;
      // Code to be executed if expression matches value2
      break;
    case 3:
      content = <TrackMove />;
      // Code to be executed if expression matches value2
      break;

    // Add more cases as needed
    default:
      content = <MoversHolder />;
    // Code to be executed if expression doesn't match any case
  }
  return (
    <div className="relative">
      <div className="w-[90vw] relative h-[calc(100vh-90px)] max-w-[1500px] mx-auto mt-24">
        <div className="w-full mt-4 flex ">
          <div className="mr-4">
            <StaticMoversStepper />
            <MoversProgress />
          </div>
          {content}
        </div>
      </div>
    </div>
  );
};

export default MoversContainer;
