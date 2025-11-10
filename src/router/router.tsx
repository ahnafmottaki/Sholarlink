import RootLayout from "@/Layout/RootLayout";
import AgentRegister from "@/pages/AgentRegister";
import Landing from "@/pages/Landing";
import { createBrowserRouter } from "react-router";
import Login from "@/pages/Login";
import AgentDashboard from "@/pages/AgentDashboard";
import AgentLayout from "@/Layout/AgentLayout";
import CreateStudent from "@/pages/CreateStudent";
import AgentWallet from "@/pages/AgentWallet";
import AgentSettings from "@/pages/AgentSettings";
import AdminLayout from "@/Layout/AdminLayout";
import AdminDashboard from "@/pages/AdminDashboard";
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
      { path: "settings", element: <AgentSettings /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [{ index: true, element: <AdminDashboard /> }],
  },
]);

export default router;
