import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import { ThemeProvider } from "./context/theme/theme-context.tsx";
import { RouterProvider } from "react-router";
import router from "./router/router.tsx";
import { Provider } from "react-redux";
import store from "./app/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
);
