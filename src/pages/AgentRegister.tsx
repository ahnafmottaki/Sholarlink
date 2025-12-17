import { useRegisterMutation } from "@/api";
import AccountFields from "@/components/custom/AgentRegister/AccountFields";
import ProfileFields from "@/components/custom/AgentRegister/ProfileFields";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FieldGroup } from "@/components/ui/field";
import { createFormData, parseSchema } from "@/lib/utils";
import {
  agentRegisterSchema,
  type Agent,
} from "@/zod-schema/agentRegisterSchema";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";

const Tabs = ["profile", "account"] as const;

const AgentRegister = () => {
  const [tab, setTab] = useState<(typeof Tabs)[number]>("profile");
  const [register, { isLoading, isError, error }] = useRegisterMutation();
  if (isError) {
    console.log("error in the whole");
    console.log(error);
  }
  const onChangeTab = () => {
    setTab(tab === "profile" ? "account" : "profile");
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = parseSchema<Agent>(event.currentTarget, agentRegisterSchema);
    if (result.error) {
      toast.error(result.error);
      return;
    }
    console.log(result.data);
    const formData = createFormData(result.data!);
    register(formData);
  };
  return (
    <>
      <div className="container min-h-screen flex items-center justify-center mx-auto px-4 py-12 max-w-2xl">
        <Card className="w-full">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Become an Agent</CardTitle>
            <CardDescription>
              Register to start helping students achieve their academic dreams
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full grid-cols-2 mb-4">
              {Tabs.map((t) => (
                <Button
                  key={t}
                  onClick={onChangeTab}
                  variant={tab === t ? "default" : "outline"}
                >
                  {t}
                </Button>
              ))}
            </div>
            <form className="space-y-4" onSubmit={onSubmit}>
              <div className={tab === "profile" ? "block" : "hidden"}>
                <FieldGroup>
                  <ProfileFields />
                </FieldGroup>
              </div>
              <div className={tab === "account" ? "block" : "hidden"}>
                <FieldGroup>
                  <AccountFields />
                </FieldGroup>
              </div>
              <div className=" flex justify-between">
                <Button type="button" variant={"outline"} onClick={onChangeTab}>
                  {tab === "profile" ? "Next" : "Previous"}
                </Button>
                <Button disabled={isLoading} type="submit">
                  Register
                </Button>
              </div>
            </form>
            <p className="text-sm text-center text-muted-foreground">
              Already have an account?{" "}
              <Button
                disabled={isLoading}
                variant="link"
                className="p-0"
                type="button"
              >
                Login here
              </Button>
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AgentRegister;
