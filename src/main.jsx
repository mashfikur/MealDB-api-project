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
    <AuthProvider>
      <ContextProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}></RouterProvider>
        </QueryClientProvider>
      </ContextProvider>
    </AuthProvider>
  </React.StrictMode>
);
