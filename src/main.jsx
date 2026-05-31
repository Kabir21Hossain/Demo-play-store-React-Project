import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import './App.css'
import { router } from "./Router/Routes";
import { StrictMode } from "react";
import { userContext } from "./context";

const user = {
  name: 'kabir',
  age: 23,
  roll: 12
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <userContext.Provider value={user}>
      <RouterProvider router={router} />
    </userContext.Provider>
  </StrictMode>
);

