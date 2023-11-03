import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./Authentication/AuthProvider.jsx";
import router from "./routes/Router.jsx";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ContextProvider from "./context/ContextProvider.jsx";

//creating a query client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
      </QueryClientProvider>
    </ContextProvider>
  </React.StrictMode>
);
