import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import SideBar from "./components/SideBar";
import Timecadrant from "./components/TimeCadrant";
import "./App.css";

function App() {
  const currentDate = new Date();
  const [time, setTime] = useState<Date>(currentDate);
  const queryClient = new QueryClient();

  console.log(time);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="flex flex-col lg:flex-row h-full font-barlow-condensed">
          <Timecadrant time={time} />
          <SideBar time={time} />
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
