import { useTodayEvents } from "../hooks/useEvents";
import { useContext } from "react";
import { getRandomObjects } from "../utils/func";
import DateContext from "../global/dateContext";

const regex = /(\d+)\D+(.*?);(.*)/;

const Birth = () => {
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

  const births = EventData?.data.data.Births;
  const randomBirths = getRandomObjects(births, 3);

  // parse the array and return the year and the text
  const parsedBirths = randomBirths.map((birth) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const match = (birth as any).text.match(regex);
    const text = match?.[3];
    return { text };
  });

  return (
    <div className="mb-8 order-3">
      <ul className="pt-6 text-sm">
        {parsedBirths.map((birth, index) => (
          <li className="flex gap-6" key={index}>
            <span>• </span>
            <span className="line-clamp-1">{birth.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Birth;
