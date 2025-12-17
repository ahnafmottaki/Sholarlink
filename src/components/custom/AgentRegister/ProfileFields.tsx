import { useGetCountriesQuery } from "@/api/publicApi";
import InputField from "../FormFields/InputField";
import SelectField from "../FormFields/SelectField";
import { SelectItem } from "@/components/ui/select";
import TextAreaField from "../FormFields/TextAreaField";

export default function ProfileFields() {
  const { data } = useGetCountriesQuery();
  return (
    <>
      <InputField
        label="Username"
        type="text"
        id="username"
        defaultValue="john"
        required
      />
      <InputField
        label="Password"
        type="password"
        id="password"
        defaultValue={"123456"}
        required
      />
      <SelectField label={"country"} triggerText="Choose a counry" id="country">
        {data &&
          data.data.slice(0, 5).map(({ _id, name }) => (
            <SelectItem key={_id} value={_id}>
              {name}
            </SelectItem>
          ))}
      </SelectField>
      <InputField
        type="number"
        label="contact no"
        id="contactNo"
        required
        placeholder="01329553511"
        defaultValue={"01329553511"}
      />
      <TextAreaField
        label="address"
        id="address"
        className="resize-y max-h-30 min-h-20"
        placeholder="Kanchibari, Dhubni Bazar, Sundarganj, Gaibandha"
        defaultValue={"Kanchibari, Dhubni Bazar, Sundarganj, Gaibandha"}
      />
    </>
  );
}
