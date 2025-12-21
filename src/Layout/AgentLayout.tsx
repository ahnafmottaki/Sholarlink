import Sidebar from "@/components/custom/Sidebar";
import { Toaster } from "@/components/ui/sonner";
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
    { icon: LayoutDashboard, label: "Dashboard", path: "/agent" },
    { icon: UserPlus, label: "Create Profile", path: "/agent/createStudent" },
    { icon: Users, label: "My Students", path: "/agent/students" },
    { icon: Wallet, label: "Wallet", path: "/agent/wallet" },
    { icon: Settings, label: "Settings", path: "/agent/settings" },
  ];
  return (
    <>
      <Toaster duration={3000} position="top-center" />

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
    </>
  );
};

export default AgentLayout;
