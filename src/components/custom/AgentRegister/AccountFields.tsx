import { SelectItem } from "@/components/ui/select";
import SelectField from "../FormFields/SelectField";
import { useState } from "react";
import { ACCOUNT_TYPES, type Account } from "@/constants/document-types";
import InputField from "../FormFields/InputField";
import DropFile from "../DropFile";
import { Field, FieldLabel } from "@/components/ui/field";

export default function AccountFields() {
  const [accountType, setAccountType] = useState<Account>("individual");
  const isIndividual = accountType === "individual";
  return (
    <>
      <SelectField
        label="account type"
        id="accountType"
        triggerText="select account type"
        defaultValue={accountType}
        onValueChange={(value) => setAccountType(value as Account)}
      >
        {Object.keys(ACCOUNT_TYPES).map((key) => (
          <SelectItem key={key} value={key}>
            {key}
          </SelectItem>
        ))}
      </SelectField>
      {!isIndividual && (
        <InputField
          label="organization name"
          type="text"
          required
          placeholder="goated org"
          id="orgName"
          defaultValue={"goated organization"}
        />
      )}
      <InputField
        label={isIndividual ? "email" : "organization email"}
        id="email"
        required
        placeholder="ahnafmottaki22@gmail.com"
        defaultValue={"ahnafmottaki22@gmail.com"}
      />
      <InputField
        label={isIndividual ? "full name" : "person in charge"}
        type="text"
        id="name"
        required
        placeholder="ahnaf mottaki"
        defaultValue={"ahnaf mottaki"}
      />
      <SelectField
        key={accountType}
        label="document_type"
        id="documentType"
        triggerText="select one"
        defaultValue={Object.keys(ACCOUNT_TYPES[accountType])[0]}
      >
        {Object.entries(ACCOUNT_TYPES[accountType]).map(([key, value]) => (
          <SelectItem key={key} value={key}>
            {value}
          </SelectItem>
        ))}
      </SelectField>
      <Field className="space-y-2">
        <FieldLabel htmlFor="document">document type</FieldLabel>
        <DropFile accept="application/pdf" name="document" id="document" />
      </Field>
    </>
  );
}
