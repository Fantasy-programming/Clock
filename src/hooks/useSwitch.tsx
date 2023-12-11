import { useState } from "react";

const useSwitch = (date: Date) => {
  const [activeSwitch, setActiveSwitch] = useState({
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
    month: months[date.getMonth()], // Get the month and convert it to the desired format
    day: date.getDate().toString().padStart(2, "0"), // Get day and pad with zero if needed
    year: date.getFullYear().toString(), // Get year as a string
  };

  const handleClick = (key: string) => {
    const newSwitch = { ...activeSwitch };

    if (activeSwitch[key] === -1) {
      const zeroKey = Object.keys(newSwitch).find((k) => newSwitch[k] === 0);
      if (zeroKey) {
        newSwitch[zeroKey] = -1;
      }
      newSwitch[key] = 0;
      setActiveSwitch(newSwitch);
    } else if (activeSwitch[key] === 1) {
      const zeroKey = Object.keys(newSwitch).find((k) => newSwitch[k] === 0);
      if (zeroKey) {
        newSwitch[zeroKey] = 1;
      }
      newSwitch[key] = 0;
      setActiveSwitch(newSwitch);
    }
  };

  const getCurrentZeroValueKey = () => {
    return Object.keys(activeSwitch).find((key) => activeSwitch[key] === 0);
  };

  const renderButtons = () => {
    return tabs.map((key) => {
      const number = activeSwitch[key];

      switch (number) {
        case -1:
          return (
            <button
              className="absolute bottom-2 right-0 text-4xl font-medium"
              onClick={() => handleClick(key)}
              key={key}
            >
              {map[key]}
            </button>
          );
        case 0:
          return (
            <div className="font-abril text-[11rem]" key={key}>
              {key === "year" ? (
                <span className="text-[10rem]">{map[key]}</span>
              ) : (
                map[key]
              )}
            </div>
          );
        case 1:
          return (
            <button
              className="absolute top-8 left-8 text-2xl font-medium"
              onClick={() => handleClick(key)}
              key={key}
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
