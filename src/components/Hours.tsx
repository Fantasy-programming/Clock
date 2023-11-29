const Hours = ({ date }) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";
  const hours12 = hours % 12 || 12;

  return (
    <div className="flex gap-4 pb-8 order-1 items-center justify-center lg:justify-start">
      <span className="text-8xl">{hours12}</span>
      <div className="flex border-b-2 border-b-tertiary">
        <div className="grid border-r border-r-tertiary  p-4 pt-0 pb-8">
          <span className="text-xl">{minutes}</span>
        </div>
        <div className="grid  p-4 pt-0">
          <span className="text-xl">{seconds}</span>
        </div>
        <div className="grid  border-l  border-l-tertiary justify-center p-4 pt-0 ">
          <span className="text-xl">{ampm}</span>
        </div>
      </div>
    </div>
  );
};

export default Hours;
