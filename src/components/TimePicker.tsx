import { useContext } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import Arrow from "../assets/arrow-up.svg?react";
import useSwitch from "../hooks/useSwitch";
import DateContext from "../global/dateContext";

const TimePicker = () => {
  const [date, dateDispatch] = useContext(DateContext);
  const { getCurrentZeroValueKey, renderButtons } = useSwitch(date);
  const [parent] = useAutoAnimate();

  const handleClick = (key: string) => {
    const current = getCurrentZeroValueKey();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const actionType = `${key.toUpperCase()}_${current?.toLocaleUpperCase()}` as any;
    dateDispatch({ type: actionType });
  };

  return (
    <div className="flex-col-reverse flex lg:flex-row lg:gap-10 gap-5">
      <div className="flex flex-row lg:flex-col justify-center gap-6">
        <button onClick={() => handleClick("Increment")}>
          <Arrow width="20px" height="20px" strokeWidth="10px" />
        </button>
        <button className="rotate-180" onClick={() => handleClick("Decrement")}>
          <Arrow width="20px" height="20px" />
        </button>
      </div>
      <div className="relative" ref={parent}>
        {renderButtons()}
      </div>
    </div>
  );
};

export default TimePicker;
