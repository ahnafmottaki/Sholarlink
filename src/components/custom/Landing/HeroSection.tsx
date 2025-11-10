import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,hsl(var(--primary)/0.05),transparent)]" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Empower Students to Reach{" "}
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              Top Universities
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Join ScholarLink as a verified agent and help students navigate
            their path to world-class education
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/agent/register">
              <Button size="lg" className="gap-2">
                <Users className="h-5 w-5" />
                Become an Agent
              </Button>
            </Link>
            <Link to="/admin/login">
              <Button size="lg" variant="outline">
                Admin Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
