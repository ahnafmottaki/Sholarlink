import RootLayout from "@/Layout/RootLayout";
import AgentRegister from "@/pages/AgentRegister";
import Landing from "@/pages/Landing";
import { createBrowserRouter } from "react-router";
import Login from "@/pages/Login";
import AgentDashboard from "@/pages/AgentDashboard";
import AgentLayout from "@/Layout/AgentLayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Landing /> },
      { path: "agent/login", element: <Login as="agent" /> },
      { path: "admin/login", element: <Login as="admin" /> },
      { path: "agent/register", element: <AgentRegister /> },
    ],
  },
  {
    path: "/agent/dashboard",
    element: <AgentLayout />,
    children: [{ index: true, element: <AgentDashboard /> }],
  },
]);

export default router;
