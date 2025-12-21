import type { FormEvent } from "react";
import Login from "./Login";
import { parseSchema } from "@/lib/utils";
import { loginSchema } from "@/zod-schema/agentRegisterSchema";
import { toast } from "sonner";
import { useAdminLoginMutation } from "@/api";
import { Navigate, useLocation } from "react-router";

const AdminLogin = () => {
  const location = useLocation();
  const [adminLogin, { isLoading, isSuccess, data }] = useAdminLoginMutation();
  if (!isLoading && isSuccess && data) {
    console.log("Login successful");
    return <Navigate to={location.state?.from || "/admin"}></Navigate>;
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
    // Add your login logic here
    console.log(result.data!);
    adminLogin({
      username: result.data!.username,
      password: result.data!.password,
    });
  };
  return (
    <>
      <Login
        title="Admin Login"
        description="Access the admin dashboard to manage agents and applications"
        loginHandler={loginHandler}
        isLoading={isLoading}
      />
    </>
  );
};

export default AdminLogin;
