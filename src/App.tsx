import React from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import styled from "styled-components";
import Main from "./pages/Main";
import Check from "./pages/Check";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/check",
      element: <Check />,
    },
  ]);
  return (
    <SContainer>
      <RouterProvider router={router} />
    </SContainer>
  );
};

export default App;
const SContainer = styled.div``;
