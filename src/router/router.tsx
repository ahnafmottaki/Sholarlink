import RootLayout from "@/Layout/RootLayout";
import AgentLogin from "@/pages/AgentLogin";
import Landing from "@/pages/Landing";
import { createBrowserRouter } from "react-router";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Landing /> },
      { path: "agentLogin", element: <AgentLogin /> },
    ],
  },
]);

export default router;
