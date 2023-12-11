import { useState, useEffect } from "react";
import Aquarius from "../assets/aquarius.svg?react";
import Virgo from "../assets/virgo.svg?react";
import Taurus from "../assets/taurus.svg?react";
import Leo from "../assets/leo.svg?react";
import Cancer from "../assets/cancer.svg?react";
import Gemini from "../assets/gemini.svg?react";
import Balance from "../assets/balance.svg?react";
import Capricorn from "../assets/capricorn.svg?react";
import Sagittarius from "../assets/sagittarius.svg?react";

const signsIcon = {
  Aquarius: Aquarius,
  Scorpio: Aquarius,
  Pisces: Aquarius,
  Aries: Aquarius,
  Virgo: Virgo,
  Taurus: Taurus,
  Libra: Aquarius,
  Leo: Leo,
  Cancer: Cancer,
  Gemini: Gemini,
  Balance: Balance,
  Capricorn: Capricorn,
  Sagittarius: Sagittarius,
};

const useAstro = (dateObj: Date) => {
  const [astrologicalSign, setAstrologicalSign] = useState("");

  useEffect(() => {
    const zodiacData = {
      Capricorn: { month: 12, day: 22 },
      Aquarius: { month: 1, day: 20 },
      Pisces: { month: 2, day: 19 },
      Aries: { month: 3, day: 21 },
      Taurus: { month: 4, day: 20 },
      Gemini: { month: 5, day: 21 },
      Cancer: { month: 6, day: 21 },
      Leo: { month: 7, day: 23 },
      Virgo: { month: 8, day: 23 },
      Libra: { month: 9, day: 23 },
      Scorpio: { month: 10, day: 23 },
      Sagittarius: { month: 11, day: 22 },
      CapricornEnd: { month: 12, day: 31 }, // Extra day for the loop
    };

    const getAstrologicalSign = (month, day) => {
      const signs = Object.keys(zodiacData);

      for (let i = 0; i < signs.length - 1; i++) {
        const sign = signs[i];
        const nextSign = signs[i + 1];

        const { month: signMonth, day: signDay } = zodiacData[sign];
        const { month: nextMonth, day: nextDay } = zodiacData[nextSign];

        if (
          (month === signMonth - 1 && day >= signDay) ||
          (month === nextMonth - 1 && day < nextDay)
        ) {
          return sign;
        }
      }

      return signs[0]; // Default to Capricorn if date does not fit in any range
    };

    const month = dateObj.getMonth(); // Month is 0-indexed
    const day = dateObj.getDate();

    const sign = getAstrologicalSign(month, day);
    setAstrologicalSign(sign);
  }, [dateObj]);

  return [astrologicalSign, signsIcon[astrologicalSign]];
};

export default useAstro;
