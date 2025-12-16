import { useGetCountriesQuery } from "@/api/publicApi";
import InputField from "../FormFields/InputField";
import SelectField from "../FormFields/SelectField";
import { SelectItem } from "@/components/ui/select";
import { Activity } from "react";

export default function AccountFields() {
  const { data, error, isError } = useGetCountriesQuery();
  if (isError) {
    throw new Error("");
  }
  return (
    <Activity mode="visible">
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
      <SelectField label={"country"} triggerText="Choose a counry" id="country">
        {data &&
          data.data.map(({ _id, name }) => (
            <SelectItem key={_id} value={_id}>
              {name}
            </SelectItem>
          ))}
      </SelectField>
    </Activity>
  );
}
