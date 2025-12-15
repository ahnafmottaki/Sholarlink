import React, { type FormEvent } from "react";
import { useNavigate } from "react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import DropFile from "@/components/custom/DropFile";
import { Button } from "@/components/ui/button";
import countries from "@/constants/countries";
import InputField from "@/components/custom/FormFields/InputField";
import SelectField from "@/components/custom/FormFields/SelectField";
import TextAreaField from "@/components/custom/FormFields/TextAreaField";
import { SelectItem } from "@/components/ui/select";
import { toast } from "sonner";
import {
  agentRegisterSchema,
  type Agent,
} from "@/zod-schema/agentRegisterSchema";
import DOCUMENT_TYPES from "@/constants/document-types";
import { axiosSecure } from "@/lib/axios";
import { createFormData, parseFormData } from "@/lib/utils";
import type { FailedResponse, Response } from "@/types/axios";

const Tabs = {
  Profile: "profile",
  Account: "account",
} as const;
type TabStateProp = (typeof Tabs)[keyof typeof Tabs];
const ACCOUNT_TYPES = ["individual", "organization"] as const;
type AccountType = (typeof ACCOUNT_TYPES)[number];

const AgentRegister = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState<TabStateProp>(Tabs.Profile);
  const [accountType, setAccountType] =
    React.useState<AccountType>("individual");
  // const formRef = React.useRef<HTMLFormElement>(null);
  const isProfile = activeTab === "profile";

  const onFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = parseFormData<Agent>(
      event.currentTarget,
      agentRegisterSchema,
    );
    if (!result.success) {
      toast.error(result.error);
      return;
    }

    toast.promise(
      axiosSecure.post("/auth/register", createFormData(result.data)),
      {
        loading: "Registering...",
        success: (response: Response) => {
          navigate("/agent");
          return response.data.message;
        },
        error: (err: FailedResponse) => {
          return err.response?.data.error || "An Error Occurred";
        },
      },
    );
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
            <form className="space-y-4" onSubmit={onFormSubmit}>
              <section>
                <div className="grid w-full grid-cols-2 mb-4">
                  {Object.values(Tabs).map((tab) => (
                    <Button
                      type="button"
                      variant={activeTab === tab ? "secondary" : "outline"}
                      onClick={() => setActiveTab(tab)}
                      key={tab}
                      className={`${
                        activeTab === tab
                          ? "bg-secondary text-secondary-foreground"
                          : ""
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)} Setup
                    </Button>
                  ))}
                </div>
                <section className={`${isProfile ? "" : "hidden"}`}>
                  <FieldGroup>
                    <FieldSet>
                      <InputField
                        label="username"
                        id="username"
                        required
                        defaultValue={"john"}
                        placeholder="john_doe"
                      />
                      <InputField
                        label="Password"
                        id="password"
                        type="password"
                        defaultValue={"123456"}
                        required
                        placeholder="password123"
                      />

                      <SelectField
                        id="country"
                        label="Country"
                        triggerText="Select country"
                        disabled={false}
                        defaultValue="AO"
                      >
                        {countries.map((op) => (
                          <SelectItem key={op.code} value={op.code}>
                            {op.name}
                          </SelectItem>
                        ))}
                      </SelectField>
                      <InputField
                        type="number"
                        label="Contact No."
                        id="contact_no"
                        defaultValue={8801329553511}
                        required
                        placeholder="+8801312345678"
                      />
                      <TextAreaField
                        className="min-h-20 max-h-25 resize-y"
                        label="Address"
                        id="address"
                        defaultValue={
                          "Kanchibari, Dhubni Bazar, Sundarganj, Gaibandha"
                        }
                        required
                        placeholder="123 Main St, Anytown, USA"
                      />
                    </FieldSet>
                  </FieldGroup>
                </section>

                <section className={`${!isProfile ? "" : "hidden"}`}>
                  <FieldGroup>
                    <FieldSet>
                      <SelectField
                        id="account_type"
                        label="Account Type"
                        triggerText="Select account type"
                        defaultValue={"individual"}
                        onValueChange={(value) =>
                          setAccountType(value as AccountType)
                        }
                      >
                        {ACCOUNT_TYPES.map((op) => (
                          <SelectItem key={op} value={op}>
                            {op}
                          </SelectItem>
                        ))}
                      </SelectField>
                      {accountType === "individual" ? (
                        <>
                          <InputField
                            label="Full Name"
                            id="full_name"
                            required
                            defaultValue={"Ahnaf Mottaki"}
                            placeholder="John Doe"
                          />
                          <InputField
                            label="Email"
                            id="email"
                            defaultValue={"ahnafmottaki2022@gmail.com"}
                            required
                            placeholder="john.doe@example.com"
                          />
                        </>
                      ) : (
                        <>
                          <InputField
                            label="Organization Name"
                            id="organization_name"
                            placeholder="ACME Inc."
                            defaultValue={"Mash enterprise"}
                            required
                          />
                          <InputField
                            label="Organization Email"
                            id="organization_email"
                            type="email"
                            name="organization_email"
                            defaultValue={"mashenterprise@gmail.com"}
                            placeholder="john.doe@example.com"
                            required
                          />
                          <InputField
                            label="Person In Charge"
                            type="text"
                            id="person_in_charge"
                            placeholder="John Doe"
                            defaultValue={"mashrur chutiya"}
                            required
                            name="person_in_charge"
                          />
                        </>
                      )}

                      {accountType === "individual" ? (
                        <>
                          <SelectField
                            label="Document Type"
                            id="document_type"
                            triggerText="Select document type"
                            defaultValue={DOCUMENT_TYPES[accountType][0]}
                          >
                            {DOCUMENT_TYPES[accountType].map((op) => (
                              <SelectItem key={op} value={op}>
                                {op}
                              </SelectItem>
                            ))}
                          </SelectField>
                        </>
                      ) : (
                        <SelectField
                          label="Document Type"
                          id="document_type"
                          triggerText="Select document type"
                          defaultValue={DOCUMENT_TYPES[accountType][0]}
                        >
                          {DOCUMENT_TYPES[accountType].map((op) => (
                            <SelectItem key={op} value={op}>
                              {op}
                            </SelectItem>
                          ))}
                        </SelectField>
                      )}

                      <Field>
                        <FieldLabel>Document File</FieldLabel>
                        <DropFile name="document" accept="application/pdf" />
                      </Field>
                    </FieldSet>
                  </FieldGroup>
                </section>
              </section>
              {activeTab === "account" ? (
                <div className="flex justify-between items-center">
                  <Button
                    type="button"
                    size={"lg"}
                    variant={"outline"}
                    onClick={() => setActiveTab("profile")}
                  >
                    Previous
                  </Button>
                  <Button type="submit" size="lg">
                    Submit for Verification
                  </Button>
                </div>
              ) : (
                <Button
                  type="button"
                  size="lg"
                  variant={"outline"}
                  className="ml-auto block"
                  onClick={() => setActiveTab("account")}
                >
                  Next
                </Button>
              )}

              <p className="text-sm text-center text-muted-foreground">
                Already have an account?{" "}
                <Button
                  variant="link"
                  className="p-0"
                  type="button"
                  onClick={() => navigate("/agentLogin")}
                >
                  Login here
                </Button>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AgentRegister;
