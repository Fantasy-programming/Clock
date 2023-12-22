const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (time % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const Time = ({ time }: { time: number }) => {
  return (
    <div className="font-abril tabular-nums text-[6rem] md:text-[8rem]">
      {formatTime(time)}
    </div>
  );
};

export default Time;
