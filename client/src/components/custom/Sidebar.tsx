import {
  GraduationCap,
  LogOut,
  Menu,
  Moon,
  Sun,
  X,
  type LucideIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import { Link, NavLink } from "react-router";
import React from "react";
import { useTheme } from "@/context/theme/theme-context";

interface SideBarProps {
  menuItems: {
    icon: LucideIcon;
    label: string;
    path: string;
  }[];
}

const Sidebar: React.FC<SideBarProps> = ({ menuItems }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(false);
  const { setTheme, theme } = useTheme();
  return (
    <>
      <Button
        size="icon"
        className="fixed top-4 right-4 z-50 p-0 md:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </Button>
      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      <aside
        className={`w-64 border-r bg-card flex flex-col fixed md:static h-full md:h-screen z-40 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="p-6 border-b">
          <Link
            to="/"
            className="flex items-center gap-2 font-semibold text-xl"
          >
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              ScholarLink
            </span>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end
              className={({ isActive }) =>
                `block hover:bg-accent/50 hover:text-accent-foreground  ${
                  isActive ? "bg-accent/50 text-accent-foreground" : ""
                }`
              }
            >
              <Button variant={"none"} className=" w-full justify-start gap-3">
                <item.icon className="h-5 w-5" />
                {item.label}
              </Button>
            </NavLink>
          ))}
        </nav>

        <div className="p-4  space-y-2">
          <Button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            variant="ghost"
            className="w-full justify-start gap-3  border "
          >
            {theme === "light" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5 text-yellow-400" />
            )}
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-destructive border hover:bg-destructive/10"
          >
            <LogOut className="h-5 w-5" />
            Logout
          </Button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
