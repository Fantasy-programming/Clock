import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DateContextProvider } from "./global/dateContext";

import SideBar from "./components/SideBar";
import Timecadrant from "./components/TimeCadrant";
import AppWrapper from "./components/Wrapper";

import "./App.css";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <DateContextProvider>
          <AppWrapper>
            <Timecadrant />
            <SideBar />
          </AppWrapper>
        </DateContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
