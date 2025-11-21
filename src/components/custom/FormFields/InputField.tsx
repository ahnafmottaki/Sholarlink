import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

type InputFieldProps = React.ComponentPropsWithoutRef<"input"> & {
  label: string;
};
const InputField: React.FC<InputFieldProps> = ({ label, id, ...props }) => {
  return (
    <Field>
      <FieldLabel>{label}</FieldLabel>
      <Input id={id} name={id} {...props} />
    </Field>
  );
};

export default InputField;
