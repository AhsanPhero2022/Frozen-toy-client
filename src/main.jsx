import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Router from "./components/Routes/Router.jsx";
import Banner from "./components/Home/Banner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Router></Router>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
