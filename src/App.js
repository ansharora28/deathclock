import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/navbar";
import Example from "./components/verifyTailwind";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Landing from "./components/landingpage";

const AppLayout = () => {
  return (
    <div className="App">
      <Navbar />
      <Landing />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
