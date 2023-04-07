import React from "react";
import ReactDOM from "react-dom/client";

import Example from "./components/verifyTailwind";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
