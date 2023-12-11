import { createContext, useReducer } from "react";

const dateReducer = (state: Date, action: { type: string }) => {
  switch (action.type) {
    case "INCREMENT_DAY":
      return new Date(state.getTime() + 24 * 60 * 60 * 1000); // Increment day by 1
    case "DECREMENT_DAY":
      return new Date(state.getTime() - 24 * 60 * 60 * 1000); // Decrement day by 1
    case "INCREMENT_MONTH":
      const nextMonthDate = new Date(state);
      nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
      return nextMonthDate;
    case "DECREMENT_MONTH":
      const previousMonthDate = new Date(state);
      previousMonthDate.setMonth(previousMonthDate.getMonth() - 1);
      return previousMonthDate;
    case "INCREMENT_YEAR":
      const nextYearDate = new Date(state);
      nextYearDate.setFullYear(nextYearDate.getFullYear() + 1);
      return nextYearDate;
    case "DECREMENT_YEAR":
      const previousYearDate = new Date(state);
      previousYearDate.setFullYear(previousYearDate.getFullYear() - 1);
      return previousYearDate;
    default:
      return state;
  }
};

const DateContext = createContext();

export const DateContextProvider = ({ children }) => {
  const [date, dateDispatch] = useReducer(dateReducer, new Date());
  return (
    <DateContext.Provider value={[date, dateDispatch]}>
      {children}
    </DateContext.Provider>
  );
};

export default DateContext;
