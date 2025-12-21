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
import type { FormEvent, ReactNode } from "react";
import { Link } from "react-router";
interface LoginProp {
  title: string;
  description: string;
  loginHandler: (event: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
}
const Login = ({ title, description, loginHandler, children }: LoginProp) => {
  return (
    <div className="container mx-auto flex items-center justify-center px-4 py-12 min-h-[calc(100vh)] max-w-md">
      <Card className="w-full">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={loginHandler}>
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder={"mash"}
                defaultValue={"mash"}
                name="username"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                name="password"
                required
                defaultValue={"123456"}
              />
            </div>

            <Button variant="link" className="p-0 h-auto text-sm">
              Forgot password?
            </Button>

            <Button type="submit" className="w-full" size="lg">
              Login
            </Button>

            {children}
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
