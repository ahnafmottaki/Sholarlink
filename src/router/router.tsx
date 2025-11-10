import RootLayout from "@/Layout/RootLayout";
import AgentLogin from "@/pages/AgentLogin";
import AgentRegister from "@/pages/AgentRegister";
import Landing from "@/pages/Landing";
import { createBrowserRouter } from "react-router";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Landing /> },
      { path: "agentLogin", element: <AgentLogin /> },
      { path: "agentRegister", element: <AgentRegister /> },
    ],
  },
]);

export default router;
