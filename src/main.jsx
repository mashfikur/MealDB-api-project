import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Foods from "./components/Foods.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import FoodDetails from "./components/FoodDetails.jsx";
import Layout from "./components/Layout.jsx";
import Categories from "./components/Categories.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import AuthProvider from "./Authentication/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <App></App>,
      },
      {
        path: "/foods",
        loader: async () => {
          const res = await fetch(
            "https://www.themealdb.com/api/json/v1/1/search.php?f=c"
          );

          const data = await res.json();

          return data;
        },
        element: <Foods></Foods>,
      },
      {
        path: "/foods/:foodID",
        loader: async ({ params }) => {
          const res = await fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.foodID}`
          );

          const data = await res.json();

          return data;
        },
        element: <FoodDetails></FoodDetails>,
      },
      {
        path: "/categories",
        element: <Categories></Categories>,
        loader: async () => {
          const res = await fetch(
            "https://www.themealdb.com/api/json/v1/1/categories.php"
          );
          const data = await res.json();

          return data;
        },
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
