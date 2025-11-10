import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MoveRight } from "lucide-react";
import { Link } from "react-router";
interface LoginProp {
  as: "agent" | "admin";
}
const Login = ({ as }: LoginProp) => {
  return (
    <div className="container mx-auto flex items-center justify-center px-4 py-12 min-h-[calc(100vh)] max-w-md">
      <Card className="w-full">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">
            {as.at(0)?.toUpperCase() + as.slice(1)} Login
          </CardTitle>
          <CardDescription>
            {as === "admin"
              ? "Access the admin dashboard to manage agents and applications"
              : "Enter your credentials to access your dashboard"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder={
                  as === "admin" ? "admin@example.com" : "agent@example.com"
                }
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>

            {as === "agent" && (
              <Button variant="link" className="p-0 h-auto text-sm">
                Forgot password?
              </Button>
            )}

            <Button type="submit" className="w-full" size="lg">
              {as === "admin" ? "Login as Admin" : "Login"}
            </Button>

            {as === "agent" && (
              <p className="text-sm text-center text-muted-foreground">
                Don't have an account?{" "}
                <Link to="/agent/register">
                  <Button variant="link" className="p-0">
                    Register here
                  </Button>
                </Link>
              </p>
            )}
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
  );
};

export default Login;
