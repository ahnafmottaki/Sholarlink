import RootLayout from "@/Layout/RootLayout";
import Landing from "@/pages/Landing";
import { createBrowserRouter } from "react-router";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ index: true, element: <Landing /> }],
  },
]);

export default router;
