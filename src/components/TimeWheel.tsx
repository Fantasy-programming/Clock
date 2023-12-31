import { useContext } from "react";
import DateContext from "../global/dateContext";

import { useAutoAnimate } from "@formkit/auto-animate/react";

const getAbbreviatedDayName = (date: Date) => {
  return date.toLocaleString("en-US", { weekday: "short" }).toUpperCase();
};

const TimeWheel = () => {
  const [parent] = useAutoAnimate();
  const [date] = useContext(DateContext);
  const today = getAbbreviatedDayName(date);
  const daysToShow = [];

  for (let i = -4; i <= 4; i++) {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + i);
    const dayNumber = String(newDate.getDate()).padStart(2, "0"); // Get two-digit day
    daysToShow.push(dayNumber);
  }

  return (
    <div
      className="lg:block hidden absolute -rotate-90 right-0 translate-x-5 -translate-y-[8.5rem]"
      ref={parent}
    >
      <div className=" border-2 border-secondary rotate-[-75deg]  translate-y-[-11rem] translate-x-[-9.6rem] h-80 absolute" />
      <div className=" border-2 border-secondary rotate-[-60deg]  translate-y-[-14rem] translate-x-[-8.2rem] h-80 absolute">
        <div className="absolute rotate-90 left-0 -translate-y-8 -translate-x-2">
          <span className="font-semibold">{daysToShow[0]}</span>
        </div>
      </div>
      <div className=" border-2 border-secondary rotate-[-45deg]  translate-y-[-16.5rem] translate-x-[-6.2rem] h-80 absolute">
        <div className="absolute rotate-90 left-0 -translate-y-8 -translate-x-2">
          <span className="font-semibold">{daysToShow[1]}</span>
        </div>
      </div>
      <div className=" border-2 border-secondary rotate-[-30deg]  translate-y-[-18.4rem] translate-x-[-3.5rem] h-80 absolute">
        <div className="absolute rotate-90 left-0 -translate-y-8 -translate-x-2">
          <span className="font-semibold">{daysToShow[2]}</span>
        </div>
      </div>
      <div className=" border-2 border-secondary rotate-[-15deg]  translate-y-[-19.6rem] translate-x-[-0.5rem] h-80 absolute">
        <div className="absolute rotate-90 left-0 -translate-y-8 -translate-x-2">
          <span className="font-semibold">{daysToShow[3]}</span>
        </div>
      </div>
      <div className=" border-2 border-secondary  -translate-y-80 translate-x-10 h-80 absolute">
        <div className="absolute rotate-90 left-0 translate-y-[-4.5rem] -translate-x-10">
          <div className=" flex flex-nowrap justify-center items-center font-semibold gap-3 text-xl">
            <span className="text-xl">{today}</span>
            <div>•</div>
            <span className="text-2xl">{daysToShow[4]} </span>
          </div>
        </div>
      </div>

      <div className=" border-2 border-secondary rotate-[15deg]  translate-y-[-19.6rem] translate-x-[5.5rem] h-80 absolute">
        <div className="absolute rotate-90 left-0 -translate-y-8 -translate-x-2">
          <span className="font-semibold">{daysToShow[5]} </span>
        </div>
      </div>
      <div className=" border-2 border-secondary rotate-[30deg]  translate-y-[-18.4rem] translate-x-[8.5rem] h-80 absolute">
        <div className="absolute rotate-90 left-0 -translate-y-8 -translate-x-2">
          <span className="font-semibold">{daysToShow[6]} </span>
        </div>
      </div>
      <div className=" border-2 border-secondary rotate-[45deg]  translate-y-[-16.5rem] translate-x-[11rem] h-80 absolute">
        <div className="absolute rotate-90 left-0 -translate-y-8 -translate-x-2">
          <span className="font-semibold">{daysToShow[7]} </span>
        </div>
      </div>
      <div className=" border-2 border-secondary rotate-[60deg]  translate-y-[-14rem] translate-x-[13rem] h-80 absolute">
        <div className="absolute rotate-90 left-0 -translate-y-8 -translate-x-2">
          <span className="font-semibold">{daysToShow[8]} </span>
        </div>
      </div>
      <div className=" border-2 border-secondary rotate-[75deg]  translate-y-[-11rem] translate-x-[14.4rem] h-80 absolute"></div>
      <div className="rounded-t-full w-20 h-10 relative  z-10 bg-tertiary flex justify-center items-center text-primary font-medium">
        <span className="translate-y-1">TODAY</span>
      </div>
    </div>
  );
};

export default TimeWheel;
