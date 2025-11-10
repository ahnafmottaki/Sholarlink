import RootLayout from "@/Layout/RootLayout";
import AgentRegister from "@/pages/AgentRegister";
import Landing from "@/pages/Landing";
import { createBrowserRouter } from "react-router";
import Login from "@/pages/Login";
import AgentDashboard from "@/pages/AgentDashboard";
import AgentLayout from "@/Layout/AgentLayout";
import CreateStudent from "@/pages/CreateStudent";
import AgentWallet from "@/pages/AgentWallet";
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
  {
    path: "/agent",
    element: <AgentLayout />,
    children: [
      { index: true, element: <AgentDashboard /> },
      { path: "createStudent", element: <CreateStudent /> },
      { path: "wallet", element: <AgentWallet /> },
    ],
  },
]);

export default router;
