import Arrow from "../assets/arrow-up.svg?react";

const TimePicker = () => {
  return (
    <div className="flex-col-reverse flex lg:flex-row lg:gap-10 gap-5">
      <div className="flex flex-row lg:flex-col justify-center gap-6">
        <button>
          <Arrow width="20px" height="20px" strokeWidth="10px" />
        </button>
        <button className="rotate-180">
          <Arrow width="20px" height="20px" />
        </button>
      </div>
      <div className="relative">
        <div className="absolute top-8 left-8 text-2xl font-medium">01</div>
        <div className="font-abril text-[11rem]">JAN</div>
        <div className="absolute bottom-2 right-0 text-4xl font-medium">
          2019
        </div>
      </div>
    </div>
  );
};

export default TimePicker;
