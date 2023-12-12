import AppWrapper from "./global/Wrapper";

import SideBar from "./components/SideBar";
import Timecadrant from "./components/TimeCadrant";

import "./App.css";

function App() {
  return (
    <>
      <AppWrapper>
        <Timecadrant />
        <SideBar />
      </AppWrapper>
    </>
  );
}

export default App;
