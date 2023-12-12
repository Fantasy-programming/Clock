import Navbar from "./Navbar";
import TimePicker from "./TimePicker";
import TimeWheel from "./TimeWheel";

function TimeCadrant() {
  return (
    <div className="w-full ">
      <Navbar />
      <div className=" lg:px-44 px-20 relative flex justify-center lg:block tracking-widest py-10 lg:py-3">
        <TimePicker />
        <TimeWheel />
      </div>
    </div>
  );
}

export default TimeCadrant;
