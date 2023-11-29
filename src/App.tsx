import { useState } from "react";

import SideBar from "./components/SideBar";
import Timecadrant from "./components/TimeCadrant";
import "./App.css";

function App() {
  const currentDate = new Date();
  const [time, setTime] = useState<Date>(currentDate);
  console.log(time);

  return (
    <>
      <div className="flex flex-col lg:flex-row h-full">
        <Timecadrant time={time} />
        <SideBar time={time} />
      </div>
    </>
  );
}

export default App;
