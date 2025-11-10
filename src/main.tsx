import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import { ThemeProvider } from "./context/theme/theme-context.tsx";
import { RouterProvider } from "react-router";
import router from "./router/router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
