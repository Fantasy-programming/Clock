import { useContext } from "react";
import DateContext from "../global/dateContext";

import { useThisYearsHoliday } from "../hooks/useEvents";

const Holidays = () => {
  const [date] = useContext(DateContext);
  const holidayData = useThisYearsHoliday(date.getFullYear());

  if (holidayData.isLoading) {
    return <div className="p-4 text-center order-3">Loading...</div>;
  }

  const holiday = holidayData?.data;

  if (holiday === undefined) {
    return (
      <div className="mb-4 pt-4 order-3 text-lg italic uppercase text-dimmed  ">
        Unsupported Country
      </div>
    );
  }

  const currentHoliday = holiday.find(
    (holiday: { date: string | number | Date }) => {
      const holidayDate = new Date(holiday.date);
      return (
        holidayDate.getFullYear() === date.getFullYear() &&
        holidayDate.getMonth() === date.getMonth() &&
        holidayDate.getDate() === date.getDate()
      );
    },
  );

  return (
    <>
      {holidayData.isError || currentHoliday === undefined ? (
        <div className="mb-4 pt-4 order-3 text-lg italic uppercase text-dimmed  ">
          No holiday found
        </div>
      ) : (
        <span className="mb-8 pt-4 text-xl text-dimmed uppercase order-3">
          ♕ {currentHoliday.name}
        </span>
      )}
    </>
  );
};

export default Holidays;
