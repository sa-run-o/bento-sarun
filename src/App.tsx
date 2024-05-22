import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Check from "./pages/Check";
const App = () => {
  return (
    <div className="w-screen h-screen bg-black text-white flex content-center items-center overflow-hidden font-sans">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/check" element={<Check />} />
      </Routes>
    </div>
  );
};

export default App;
