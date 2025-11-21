import { Field, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";

type TextAreaProp = React.ComponentPropsWithoutRef<"textarea"> & {
  label: string;
};
const TextAreaField: React.FC<TextAreaProp> = ({ label, id, ...props }) => {
  return (
    <Field>
      <FieldLabel>{label}</FieldLabel>
      <Textarea id={id} name={id} {...props} />
    </Field>
  );
};

export default TextAreaField;
