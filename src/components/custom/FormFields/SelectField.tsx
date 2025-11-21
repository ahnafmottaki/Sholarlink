import { Field, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type React from "react";
interface SelectFieldProp {
  label: string;
  triggerText: string;
  id: string;
  children: React.ReactNode;
  defaultValue?: string;
  disabled?: boolean;
  onValueChange?: (value: string) => void;
}
const SelectField: React.FC<SelectFieldProp> = ({
  label,
  triggerText,
  children,
  defaultValue,
  disabled,
  onValueChange,
  id,
}) => {
  return (
    <Field>
      <FieldLabel>{label}</FieldLabel>
      <Select
        name={id}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
        disabled={disabled}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder={triggerText} />
        </SelectTrigger>
        <SelectContent>{children}</SelectContent>
      </Select>
    </Field>
  );
};

export default SelectField;
