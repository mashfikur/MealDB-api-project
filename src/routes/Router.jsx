import { createBrowserRouter } from "react-router-dom";
import Cart from "../components/Cart";
import PrivateRoute from "./PrivateRoute";
import Login from "../components/Login";
import Register from "../components/Register";
import Categories from "../components/Categories";
import FoodDetails from "../components/FoodDetails";
import Foods from "../components/Foods";
import App from "../App";
import ErrorPage from "../components/ErrorPage";
import Layout from "../components/Layout";
import SingleCategory from "../pages/SingleCategory";

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
            "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
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
        element: (
          <PrivateRoute>
            <FoodDetails></FoodDetails>
          </PrivateRoute>
        ),
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
        path: "/category/:id/foods",
        element: <SingleCategory></SingleCategory>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
