import { GraduationCap } from "lucide-react";
import { ModeToggle } from "@/context/theme/mode-toggle";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a className="flex items-center gap-2 font-semibold text-xl">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              ScholarLink
            </span>
          </a>
          <ModeToggle />
        </div>
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
