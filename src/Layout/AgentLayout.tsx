import Sidebar from "@/components/custom/Sidebar";
import {
  LayoutDashboard,
  Settings,
  UserPlus,
  Users,
  Wallet,
} from "lucide-react";
import { Outlet } from "react-router";

const AgentLayout = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/agent/dashboard" },
    { icon: UserPlus, label: "Create Profile", path: "/agent/create-student" },
    { icon: Users, label: "My Students", path: "/agent/students" },
    { icon: Wallet, label: "Wallet", path: "/agent/wallet" },
    { icon: Settings, label: "Settings", path: "/agent/settings" },
  ];
  return (
    <div className="h-screen bg-background flex">
      {/* Sidebar */}
      <Sidebar menuItems={menuItems} />

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8 space-y-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AgentLayout;
