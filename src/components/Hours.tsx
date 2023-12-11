const Hours = ({ date }) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";
  const hours12 = hours % 12 || 12;

  return (
    <div className="flex gap-5 order-1  justify-center lg:justify-start">
      <span className="text-[5.5rem]">10</span>
      <div className="pb-8 pt-8 w-full">
        <div className="flex h-full border-b-[3px] border-b-tertiary w-full">
          <div className="grid border-r-2 justify-center  border-r-tertiary w-1/3 ">
            <span className="text-3xl">00</span>
          </div>
          <div className="grid justify-center w-1/3">
            <span className="text-3xl">23</span>
          </div>
          <div className="grid  border-l-2  border-l-tertiary justify-center  w-1/3 ">
            <span className="text-3xl">AM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hours;