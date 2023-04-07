import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/navbar";
import LandingPage from "./components/landingpage";
import Example from "./components/verifyTailwind";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
