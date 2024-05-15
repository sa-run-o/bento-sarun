import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Main from "./pages/Main";
import Check from "./pages/Check";
const App = () => {
  return (
    <SContainer>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/check" element={<Check />} />
      </Routes>
    </SContainer>
  );
};

export default App;
const SContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #050505;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
