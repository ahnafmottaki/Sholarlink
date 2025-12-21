import Login from "./Login";
import { Button } from "@/components/ui/button";
import type { FormEvent } from "react";
import { parseSchema } from "@/lib/utils";
import { loginSchema } from "@/zod-schema/agentRegisterSchema";
import { toast } from "sonner";
import { useAgentLoginMutation } from "@/api";
import { Navigate, useLocation, Link } from "react-router";

export default function AgentLogin() {
  const location = useLocation();
  const [agentLogin, { isLoading, isSuccess, data }] = useAgentLoginMutation();
  if (!isLoading && isSuccess && data) {
    console.log("Login successful");
    return <Navigate to={location.state?.from || "/agent"}></Navigate>;
  }
  const loginHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = parseSchema<{ username: string; password: string }>(
      event.currentTarget,
      loginSchema,
    );
    if (result.error) {
      toast.error(result.error);
      return;
    }
    agentLogin({
      username: result.data!.username,
      password: result.data!.password,
    });
  };

  return (
    <>
      <Login
        title="Agent Login"
        description="Please enter your credentials to access your account."
        loginHandler={loginHandler}
        isLoading={isLoading}
      >
        <p className="text-sm text-center text-muted-foreground">
          Don't have an account?{" "}
          <Link to="/agentRegister">
            <Button variant="link" className="p-0">
              Register here
            </Button>
          </Link>
        </p>
      </Login>
    </>
  );
}
