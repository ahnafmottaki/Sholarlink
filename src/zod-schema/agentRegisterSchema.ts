import DOCUMENT_TYPES from "@/constants/document-types";
import z from "zod";
const LoginSchema = z.object({
  username: z.string().min(3, "username is required"),
  password: z.string().min(6, "password must be at least 6 characters"),
});
const baseAgentSchema = LoginSchema.extend({
  contact_no: z
    .string()
    .min(10, "contact number must be at least 10 characters"),
  country: z.string().min(1, "country is required"),
  address: z.string().min(1, "address is required"),
  document: z
    .instanceof(File, { message: "document is required" })
    .refine((file) => file.type === "application/pdf", "document must be a PDF")
    .refine(
      (file) => file.size <= 1024 * 1024 * 2,
      "document must be less than 2MB",
    ),
});

const individualSchema = baseAgentSchema.extend({
  account_type: z.literal("individual"),
  full_name: z.string().min(3, "full name is required"),
  email: z.email("invalid email address"),
  document_type: z.enum(DOCUMENT_TYPES.individual),
});

const organizationSchema = baseAgentSchema.extend({
  account_type: z.literal("organization"),
  organization_name: z.string().min(3, "organization name is required"),
  organization_email: z.email("invalid email address"), // Fixed: use z.string().email()
  person_in_charge: z.string().min(3, "person in charge is required"),
  document_type: z.enum(DOCUMENT_TYPES.organization), // Fixed: use z.enum() for array of literals
});

// Use discriminated union with account_type as the discriminator
const agentRegisterSchema = z.discriminatedUnion("account_type", [
  individualSchema,
  organizationSchema,
]);

type Agent = z.infer<typeof agentRegisterSchema>;
type LoginType = z.infer<typeof LoginSchema>;
type IndividualAgent = z.infer<typeof individualSchema>;
type OrganizationAgent = z.infer<typeof organizationSchema>;

export type { Agent, LoginType, IndividualAgent, OrganizationAgent };
export { agentRegisterSchema, LoginSchema };
