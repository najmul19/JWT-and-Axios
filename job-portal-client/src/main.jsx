import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import router from "./router/router.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./context/AuthCOntext/AuthProvider.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </StrictMode>
);
