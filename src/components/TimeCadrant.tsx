import Navbar from "./Navbar";
import TimePicker from "./TimePicker";

function TimeCadrant() {
  return (
    <div className="w-full">
      <Navbar />
      <div className="px-40 tracking-widest py-3">
        <TimePicker />
      </div>
    </div>
  );
}

export default TimeCadrant;
