import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./Pages/Home/Home";
import AuthProvider from "./Providers/AuthProvider";
import Login from "./Login/Login";
import Registration from "./Registration/Registration";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import EventDetails from "./Pages/EventDetails/EventDetails";
import Favorite from "./PrivateRoute/Favorite";
import ErrorPage from "./ErrorPage/ErrorPage";
import Offers from "./Pages/Offers/Offers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },

      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <EventDetails></EventDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/offers",
        element: (
          <PrivateRoute>
            <Offers></Offers>
          </PrivateRoute>
        ),
      },
      {
        path: "/favorite",
        element: (
          <PrivateRoute>
            <Favorite></Favorite>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
