import { useState } from "react";

const useSwitch = () => {
  const [activeSwitch, setActiveSwitch] = useState({
    day: 1,
    month: 0,
    year: -1,
  });

  const tabs = ["day", "month", "year"];

  const map = {
    month: "JAN",
    day: "01",
    year: "2019",
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
          console.log(key);
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

  return { activeSwitch, renderButtons };
};

export default useSwitch;
