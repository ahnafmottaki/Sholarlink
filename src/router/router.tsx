import RootLayout from "@/Layout/RootLayout";
import AgentRegister from "@/pages/AgentRegister";
import Landing from "@/pages/Landing";
import { createBrowserRouter } from "react-router";
import Login from "@/pages/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Landing /> },
      { path: "agentLogin", element: <Login as="agent" /> },
      { path: "adminLogin", element: <Login as="admin" /> },
      { path: "agentRegister", element: <AgentRegister /> },
    ],
  },
]);

export default router;
