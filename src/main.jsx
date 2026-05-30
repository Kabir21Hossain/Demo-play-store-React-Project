import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import './App.css'
import { router } from "./Router/Routes";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

