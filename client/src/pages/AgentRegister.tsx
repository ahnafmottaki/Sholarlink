import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { MoveRight, Upload } from "lucide-react";

const AgentRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    country: "",
    experience: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => navigate("/agentLogin"), 2000);
  };

  return (
    <>
      <div className="container flex items-center justify-center mx-auto px-4 py-12 max-w-2xl">
        <Card className="w-full">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Become an Agent</CardTitle>
            <CardDescription>
              Register to start helping students achieve their academic dreams
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2 ">
                <Label htmlFor="country">Country</Label>
                <Select
                  onValueChange={(value) =>
                    setFormData({ ...formData, country: value })
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usa">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="canada">Canada</SelectItem>
                    <SelectItem value="australia">Australia</SelectItem>
                    <SelectItem value="india">India</SelectItem>
                    <SelectItem value="china">China</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Experience & Qualifications</Label>
                <Textarea
                  id="experience"
                  placeholder="Describe your experience in education consulting..."
                  value={formData.experience}
                  onChange={(e) =>
                    setFormData({ ...formData, experience: e.target.value })
                  }
                  rows={4}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="document">ID Document</Label>
                <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                  <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    PDF, PNG, JPG (max 5MB)
                  </p>
                  <Input id="document" type="file" className="hidden" />
                </div>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Submit for Verification
              </Button>

              <p className="text-sm text-center text-muted-foreground">
                Already have an account?{" "}
                <Button
                  variant="link"
                  className="p-0"
                  onClick={() => navigate("/agentLogin")}
                >
                  Login here
                </Button>
              </p>
              <p className=" text-sm text-center text-muted-foreground">
                <Link to="/" className="hover:underline">
                  <Button variant="link" className="p-0 ">
                    Go to Home <MoveRight className="text-xl text-primary" />
                  </Button>
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AgentRegister;
