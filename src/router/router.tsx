import RootLayout from "@/Layout/RootLayout";
import AgentRegister from "@/pages/AgentRegister";
import Landing from "@/pages/Landing";
import { createBrowserRouter } from "react-router";
import AgentDashboard from "@/pages/AgentDashboard";
import AgentLayout from "@/Layout/AgentLayout";
import CreateStudent from "@/pages/CreateStudent";
import AgentWallet from "@/pages/AgentWallet";
import AgentSettings from "@/pages/AgentSettings";
import AdminLayout from "@/Layout/AdminLayout";
import AdminDashboard from "@/pages/AdminDashboard";
import ManageAgents from "@/pages/ManageAgents";
import StudentProfile from "@/pages/StudentProfile";
import NotFound from "@/pages/NotFound";
import AgentLogin from "@/pages/AgentLogin";
import AdminLogin from "@/pages/AdminLogin";
import AdminAgent from "@/pages/AdminAgent";
import AgentStudents from "@/pages/AgentStudents";
import AdminStudents from "@/pages/AdminStudents";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Landing /> },
      { path: "agentLogin", Component: AgentLogin },
      { path: "adminLogin", Component: AdminLogin },
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
      { path: "studentProfile", element: <StudentProfile /> },
      { path: "myStudents", element: <AgentStudents /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <AdminDashboard /> },
      {
        path: "manageAgents",
        element: <ManageAgents />,
      },
      { path: "manageStudents", element: <AdminStudents /> },
      { path: "agent/:id", element: <AdminAgent /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
