import { useState, useEffect } from "react";

const useAstro = (dateObj) => {
  const [astrologicalSign, setAstrologicalSign] = useState("");

  useEffect(() => {
    const getAstrologicalSign = (month, day) => {
      const signs = [
        "Capricorn",
        "Aquarius",
        "Pisces",
        "Aries",
        "Taurus",
        "Gemini",
        "Cancer",
        "Leo",
        "Virgo",
        "Libra",
        "Scorpio",
        "Sagittarius",
      ];

      const cutoffs = [
        [1, 20], // Aquarius starts from January 20
        [2, 19], // Pisces starts from February 19
        [3, 21], // Aries starts from March 21
        [4, 20], // Taurus starts from April 20
        [5, 21], // Gemini starts from May 21
        [6, 21], // Cancer starts from June 21
        [7, 23], // Leo starts from July 23
        [8, 23], // Virgo starts from August 23
        [9, 23], // Libra starts from September 23
        [10, 23], // Scorpio starts from October 23
        [11, 22], // Sagittarius starts from November 22
        [12, 22], // Capricorn starts from December 22
      ];

      for (let i = 0; i < cutoffs.length; i++) {
        const [signMonth, signDay] = cutoffs[i];
        if (
          (month === signMonth && day >= signDay) ||
          (month === signMonth + 1 && day < signDay)
        ) {
          return signs[i];
        }
      }

      return signs[0]; // Default to Capricorn if date does not fit in any range
    };

    const month = dateObj.getMonth() + 1; // Month is 0-indexed
    const day = dateObj.getDate();

    const sign = getAstrologicalSign(month, day);
    setAstrologicalSign(sign);
  }, [dateObj]);

  return astrologicalSign;
};

export default useAstro;
