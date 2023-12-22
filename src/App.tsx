import { Routes, Route } from "react-router-dom";

import AppWrapper from "./global/Wrapper";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Pomo from "./Pages/Pomo";

import "./App.css";

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pomo" element={<Pomo />} />
      </Routes>
    </AppWrapper>
  );
}

export default App;
