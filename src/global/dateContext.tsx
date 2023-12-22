import React, { createContext, useReducer } from "react";

type Action =
  | { type: "INCREMENT_SECOND" }
  | { type: "DECREMENT_SECOND" }
  | { type: "INCREMENT_DAY" }
  | { type: "DECREMENT_DAY" }
  | { type: "INCREMENT_MONTH" }
  | { type: "DECREMENT_MONTH" }
  | { type: "INCREMENT_YEAR" }
  | { type: "DECREMENT_YEAR" };

type DateDispatch = React.Dispatch<Action>;

const dateReducer = (state: Date, action: Action) => {
  switch (action.type) {
    case "INCREMENT_SECOND":
      return new Date(state.getTime() + 1000);
    case "DECREMENT_SECOND":
      return new Date(state.getTime() - 1000);
    case "INCREMENT_DAY": {
      return new Date(state.getTime() + 24 * 60 * 60 * 1000);
    }
    case "DECREMENT_DAY": {
      return new Date(state.getTime() - 24 * 60 * 60 * 1000);
    }
    case "INCREMENT_MONTH": {
      const nextMonthDate = new Date(state);
      nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
      return nextMonthDate;
    }
    case "DECREMENT_MONTH": {
      const previousMonthDate = new Date(state);
      previousMonthDate.setMonth(previousMonthDate.getMonth() - 1);
      return previousMonthDate;
    }
    case "INCREMENT_YEAR": {
      const nextYearDate = new Date(state);
      nextYearDate.setFullYear(nextYearDate.getFullYear() + 1);
      return nextYearDate;
    }
    case "DECREMENT_YEAR": {
      const previousYearDate = new Date(state);
      previousYearDate.setFullYear(previousYearDate.getFullYear() - 1);
      return previousYearDate;
    }
    default:
      return state;
  }
};

const DateContext = createContext<[Date, DateDispatch]>([new Date(), () => {}]);

export const DateContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [date, dateDispatch] = useReducer(dateReducer, new Date());
  return (
    <DateContext.Provider value={[date, dateDispatch]}>
      {children}
    </DateContext.Provider>
  );
};

export default DateContext;
