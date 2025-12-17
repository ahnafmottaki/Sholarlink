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
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router";
interface LoginProp {
  as: "agent" | "admin";
}
const Login = ({ as }: LoginProp) => {
  // const navigate = useNavigate();
  const isAdmin = as === "admin";
  const loginHandler = (event: FormEvent<HTMLFormElement>) => {
    // event.preventDefault();
    // const result = parseFormData<LoginType>(event.currentTarget, LoginSchema);
    // if (!result.success) {
    //   toast.error(result.error);
    //   return;
    // }
    // const url = isAdmin ? "/auth/adminLogin" : "/auth/login";
    // toast.promise(axiosSecure.post(url, result.data), {
    //   loading: "Registering...",
    //   success: (response: Response) => {
    //     const nextRoute = isAdmin ? "/admin" : "/agent";
    //     navigate(nextRoute);
    //     return response.data.message;
    //   },
    //   error: (err: FailedResponse) => {
    //     return err.response?.data.error || "An Error Occurred";
    //   },
    // });
  };
  return (
    <div className="container mx-auto flex items-center justify-center px-4 py-12 min-h-[calc(100vh)] max-w-md">
      <Card className="w-full">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">
            {as.at(0)?.toUpperCase() + as.slice(1)} Login
          </CardTitle>
          <CardDescription>
            {isAdmin
              ? "Access the admin dashboard to manage agents and applications"
              : "Enter your credentials to access your dashboard"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={loginHandler}>
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder={isAdmin ? "mash" : "john"}
                defaultValue={isAdmin ? "mash" : "john"}
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

            {as === "agent" && (
              <Button variant="link" className="p-0 h-auto text-sm">
                Forgot password?
              </Button>
            )}

            <Button type="submit" className="w-full" size="lg">
              {isAdmin ? "Login as Admin" : "Login"}
            </Button>

            {!isAdmin && (
              <p className="text-sm text-center text-muted-foreground">
                Don't have an account?{" "}
                <Link to="/agentRegister">
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
