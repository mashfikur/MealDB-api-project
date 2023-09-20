import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Foods from "./components/Foods.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import FoodDetails from "./components/FoodDetails.jsx";
import ScrollToTop from "react-scroll-to-top";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/foods",
        loader: ()=>fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=c"),
        element: <Foods></Foods>,
      },
      {
        path:"/foods/:foodID",
        loader:({params})=>fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.foodID}`),
        element:<FoodDetails></FoodDetails>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
