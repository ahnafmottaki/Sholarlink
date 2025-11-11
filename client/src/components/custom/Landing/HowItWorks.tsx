import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  return (
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
  );
};

export default HowItWorks;
