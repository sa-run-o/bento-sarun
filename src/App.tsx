import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Main from "./pages/Main";
import Check from "./pages/Check";
const App = () => {
  return (
    <SContainer>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/check" element={<Check />} />
        </Routes>
      </Router>
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
