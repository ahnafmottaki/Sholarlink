import InputField from "@/components/custom/FormFields/InputField";
import SelectField from "@/components/custom/FormFields/SelectField";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SelectItem } from "@/components/ui/select";
import type { Country } from "@/types/country";
import axios, { type AxiosResponse } from "axios";
import { useEffect, useState, type FormEvent } from "react";

const Tabs = ["profile", "account"] as const;

const AgentRegister = () => {
  const [tab, setTab] = useState<(typeof Tabs)[number]>("profile");
  const [countries, setCountries] = useState<Country[]>([]);
  useEffect(() => {
    async function fetchCountries() {
      const response: AxiosResponse<{ data: Country[] }> = await axios.get(
        `${import.meta.env.VITE_DOMAIN}/country`,
      );
      // const sorted = response.data.data
      //   .map((c) => ({
      //     ...c,
      //     name: c.name.toLowerCase().trim(),
      //   }))
      //   .sort();
      setCountries(response.data.data);
    }
    fetchCountries();
  }, []);
  const onChangeTab = () => {
    setTab(tab === "profile" ? "account" : "profile");
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted");
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
              <InputField
                label="Username"
                type="text"
                id="username"
                defaultValue="john"
              />
              <InputField
                label="Password"
                type="password"
                id="password"
                defaultValue={"123456"}
              />
              <SelectField
                label={"country"}
                triggerText="Choose a counry"
                id="country"
              >
                {countries.map(({ _id, name }) => (
                  <SelectItem key={_id} value={_id}>
                    {name}
                  </SelectItem>
                ))}
              </SelectField>
              <Button className="block mx-auto" type="submit">
                Login Here
              </Button>
            </form>
            <p className="text-sm text-center text-muted-foreground">
              Already have an account?{" "}
              <Button variant="link" className="p-0" type="button">
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
