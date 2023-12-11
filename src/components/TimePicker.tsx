import { useState } from "react";
import useSwitch from "../hooks/useSwitch";

import Arrow from "../assets/arrow-up.svg?react";

const TimePicker = () => {
  const { activeSwitch, renderButtons } = useSwitch();
  console.log(activeSwitch);

  return (
    <div className="flex-col-reverse flex lg:flex-row lg:gap-10 gap-5">
      <div className="flex flex-row lg:flex-col justify-center gap-6">
        <button>
          <Arrow width="20px" height="20px" strokeWidth="10px" />
        </button>
        <button className="rotate-180">
          <Arrow width="20px" height="20px" />
        </button>
      </div>
      <div className="relative">{renderButtons()}</div>
    </div>
  );
};

export default TimePicker;
