import { useContext } from "react";
import DateContext from "../global/dateContext";

import { useAutoAnimate } from "@formkit/auto-animate/react";
import useSwitch from "../hooks/useSwitch";

import Arrow from "../assets/arrow-up.svg?react";

const TimePicker = () => {
  const [date, dateDispatch] = useContext(DateContext);
  const { getCurrentZeroValueKey, renderButtons } = useSwitch(date);
  const [parent] = useAutoAnimate();
  const current = getCurrentZeroValueKey();

  const handleClick = (key: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const actionType =
      `${key.toUpperCase()}_${current?.toLocaleUpperCase()}` as any;
    dateDispatch({ type: actionType });
  };

  return (
    <div className="flex-col-reverse flex lg:flex-row lg:gap-10 gap-5">
      <div className="flex flex-row lg:flex-col justify-center gap-6">
        <button
          onClick={() => handleClick("Increment")}
          type="button"
          aria-label={`Increment ${current}`}
        >
          <Arrow width="20px" height="20px" strokeWidth="10px" />
        </button>
        <button
          className="rotate-180"
          onClick={() => handleClick("Decrement")}
          type="button"
          aria-label={`Decrement ${current}`}
        >
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
