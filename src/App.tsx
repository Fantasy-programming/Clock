import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DateContextProvider } from "./global/dateContext";

import SideBar from "./components/SideBar";
import Timecadrant from "./components/TimeCadrant";
import "./App.css";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <DateContextProvider>
          <div className="flex flex-col lg:flex-row h-full font-barlow-condensed">
            <Timecadrant />
            <SideBar />
          </div>
        </DateContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
