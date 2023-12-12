import { useTodayEvents } from "../hooks/useEvents";
import { useContext } from "react";

import DateContext from "../global/dateContext";

const regex = /(\d+)\D+(.*?);(.*)/;

function Highlight() {
  const [date] = useContext(DateContext);
  const day = date.getDate();
  const month = date.getMonth();
  const EventData = useTodayEvents(month, day);

  if (EventData.isLoading) {
    return <div className="order-3 p-4 text-center">Loading...</div>;
  }

  if (EventData.isError) {
    return <div className="uppercase order-3 p-4">Ooops, things went wrong</div>;
  }

  console.log(EventData);

  const event = EventData?.data.data.Events;
  const randomEvent = event[Math.floor(Math.random() * event.length)];
  const match = randomEvent?.text.match(regex);
  const year = match?.[1];
  const text = match?.[3];
  const link = randomEvent?.links[1][1];

  return (
    <div className="mb-8 order-3">
      <div className="flex justify-around pt-6 gap-5 items-center ">
        <span className="text-5xl font-medium">{year}</span>
        <span className="break-words text-lg line-clamp-2 hover:cursor-pointer relative focus-within:underline">
          {text}
          <a className="absolute top-0 left-0 w-full h-full " href={link}></a>
        </span>
      </div>
    </div>
  );
}

export default Highlight;
