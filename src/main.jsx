import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Router from "./components/Routes/Router.jsx";

import Login from "./components/pages/Login";
import Home from "./components/Home/Home";
import Register from "./components/pages/Register";
import Blog from "./components/pages/Blog";
import AddAToy from "./components/pages/AddAToy";
import AllToys from "./components/pages/AllToys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Router></Router>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/addatoy",
        element: <AddAToy></AddAToy>,
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
