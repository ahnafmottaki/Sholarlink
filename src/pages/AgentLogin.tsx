import { Link } from "react-router";
import Login from "./Login";
import { Button } from "@/components/ui/button";
import type { FormEvent } from "react";

export default function AgentLogin() {
  const loginHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <Login
        title="Agent Login"
        description="Please enter your credentials to access your account."
        loginHandler={loginHandler}
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
