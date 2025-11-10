import Sidebar from "@/components/custom/Sidebar";
import { FileText, LayoutDashboard, Users } from "lucide-react";
import { Outlet } from "react-router";

const AdminLayout = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/admin" },
    { icon: Users, label: "Manage Agents", path: "/admin/manageAgents" },
    {
      icon: FileText,
      label: "Manage Students",
      path: "/admin/manageStudents",
    },
  ];
  return (
    <div className="h-screen bg-background flex">
      {/* Sidebar */}
      <Sidebar menuItems={menuItems} />

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="sm:p-8 p-4 space-y-8 sm:space-y-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
