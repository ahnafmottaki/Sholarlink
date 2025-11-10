import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  DollarSign,
  Globe,
  GraduationCap,
  Shield,
  Users,
} from "lucide-react";

const Features = () => {
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
  );
};

export default Features;
