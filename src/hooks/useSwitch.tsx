import { useState } from "react";

const useSwitch = (date: Date) => {
  type ActiveSwitchKey = "day" | "month" | "year";
  type ActiveSwitch = {
    day: number;
    month: number;
    year: number;
  };

  const [activeSwitch, setActiveSwitch] = useState<ActiveSwitch>({
    day: 1,
    month: 0,
    year: -1,
  });

  const tabs = ["day", "month", "year"];
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const map = {
    month: months[date.getMonth()],
    day: date.getDate().toString().padStart(2, "0"),
    year: date.getFullYear().toString(),
  };

  const handleClick = (key: string) => {
    const newSwitch = { ...activeSwitch };
    if (!isKeyOfActiveSwitch(key)) return;

    if (activeSwitch[key] === -1) {
      const zeroKey = findKeyWithZeroValue(newSwitch);
      if (zeroKey) {
        newSwitch[zeroKey] = -1;
      }
      newSwitch[key] = 0;
      setActiveSwitch(newSwitch);
    } else if (activeSwitch[key] === 1) {
      const zeroKey = findKeyWithZeroValue(newSwitch);
      if (zeroKey) {
        newSwitch[zeroKey] = 1;
      }
      newSwitch[key] = 0;
      setActiveSwitch(newSwitch);
    }
  };

  const isKeyOfActiveSwitch = (key: string): key is ActiveSwitchKey => {
    return ["day", "month", "year"].includes(key);
  };

  const findKeyWithZeroValue = (
    newSwitch: ActiveSwitch,
  ): ActiveSwitchKey | undefined => {
    return (Object.keys(newSwitch) as ActiveSwitchKey[]).find(
      (k) => newSwitch[k] === 0,
    );
  };

  const getCurrentZeroValueKey = (): ActiveSwitchKey | undefined => {
    const key = Object.keys(activeSwitch).find(
      (key: string) =>
        isKeyOfActiveSwitch(key) && activeSwitch[key as ActiveSwitchKey] === 0,
    );
    return key as ActiveSwitchKey;
  };

  const renderButtons = () => {
    return tabs.map((key) => {
      if (!isKeyOfActiveSwitch(key)) return null;
      const number = activeSwitch[key];

      switch (number) {
        case -1:
          return (
            <button
              type="button"
              className="absolute bottom-2 right-0 text-4xl underline underline-offset-4 hover:no-underline focus:no-underline  font-medium"
              onClick={() => handleClick(key)}
              key={key}
              aria-label={`Change ${key} ${map[key]} to another value `}
            >
              {map[key]}
            </button>
          );
        case 0:
          return (
            <div className="font-abril text-[11rem]" key={key}>
              {key !== "day" ? (
                <span className=" text-[8rem] lg:text-[10rem]">{map[key]}</span>
              ) : (
                map[key]
              )}
            </div>
          );
        case 1:
          return (
            <button
              type="button"
              className="absolute underline underline-offset-4 hover:no-underline focus:no-underline top-8 left-8 text-2xl font-medium"
              onClick={() => handleClick(key)}
              key={key}
              aria-label={`Change ${key} ${map[key]} to another value `}
            >
              {map[key]}
            </button>
          );
        default:
          return null;
      }
    });
  };

  return { getCurrentZeroValueKey, renderButtons };
};

export default useSwitch;
