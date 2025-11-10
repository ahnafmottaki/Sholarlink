import Layout from "@/components/custom/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  DollarSign,
  Globe,
  GraduationCap,
  Heart,
  HeartCrack,
  Linkedin,
  Mail,
  Shield,
  Users,
} from "lucide-react";

const Landing = () => {
  const features = [
    {
      icon: Globe,
      title: "Global Network",
      description:
        "Connect with students worldwide seeking university applications assistance",
    },
    {
      icon: Award,
      title: "Top Universities",
      description:
        "Help students apply to prestigious institutions across the globe",
    },
    {
      icon: DollarSign,
      title: "Earn Rewards",
      description:
        "Get compensated for every successful student application you process",
    },
    {
      icon: Shield,
      title: "Verified Agents",
      description: "Join a trusted network of verified education consultants",
    },
    {
      icon: Users,
      title: "Manage Students",
      description: "Organized dashboard to track all your student applications",
    },
    {
      icon: GraduationCap,
      title: "Success Tracking",
      description:
        "Monitor application statuses and celebrate student acceptances",
    },
  ];
  return (
    <Layout>
      {/* Hero Section */}
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
              <a>
                <Button size="lg" className="gap-2">
                  <Users className="h-5 w-5" />
                  Become an Agent
                </Button>
              </a>
              <a>
                <Button size="lg" variant="outline">
                  Admin Login
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold text-lg">Register & Verify</h3>
                <p className="text-sm text-muted-foreground">
                  Sign up and submit your credentials for admin verification
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold text-lg">Create Profiles</h3>
                <p className="text-sm text-muted-foreground">
                  Build comprehensive student application profiles with required
                  documents
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold text-lg">Track & Earn</h3>
                <p className="text-sm text-muted-foreground">
                  Monitor application status and receive rewards for successful
                  placements
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose ScholarLink
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 space-y-3">
                  <feature.icon className="h-10 w-10 text-primary" />
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo Section */}
            <div className="flex flex-col ">
              <a className="flex items-center gap-2 font-semibold text-xl mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
                <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                  ScholarLink
                </span>
              </a>
              <p className="text-sm text-muted-foreground text-left ">
                Connecting students with their future, one application at a
                time.
              </p>
            </div>

            {/* Links Section */}
            <div className="md:mx-auto">
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
            {/* Connect With Us Section */}
            <div className="md:mx-auto">
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>support@scholarlink.com</span>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full h-8 w-8"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full h-8 w-8"
                  >
                    <HeartCrack className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full h-8 w-8"
                  >
                    <HeartCrack className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full h-8 w-8"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t text-center text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} ScholarLink. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </Layout>
  );
};

export default Landing;
