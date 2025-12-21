import { ACCOUNT_TYPES } from "@/constants/document-types";
import z from "zod";
const loginSchema = z.object({
  username: z
    .string()
    .min(3, "username is required")
    .refine((arg) => arg.toLowerCase().trim()),
  password: z.string().min(6, "password must be at least 6 characters"),
});
const baseAgentSchema = loginSchema.extend({
  contactNo: z
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
  name: z.string().min(3, "full name is required"),
  email: z.email("invalid email address"),
});

const individualSchema = baseAgentSchema.extend({
  accountType: z.literal("individual"),
  documentType: z.enum(Object.keys(ACCOUNT_TYPES.individual)),
});

const organizationSchema = baseAgentSchema.extend({
  accountType: z.literal("organization"),
  orgName: z.string().min(3, "organization name is required"),
  documentType: z.enum(Object.keys(ACCOUNT_TYPES.organization)),
});

// Use discriminated union with account_type as the discriminator
const agentRegisterSchema = z.discriminatedUnion("accountType", [
  individualSchema,
  organizationSchema,
]);

type Agent = z.infer<typeof agentRegisterSchema>;
type LoginType = z.infer<typeof loginSchema>;
type IndividualAgent = z.infer<typeof individualSchema>;
type OrganizationAgent = z.infer<typeof organizationSchema>;

export type { Agent, LoginType, IndividualAgent, OrganizationAgent };
export { agentRegisterSchema, loginSchema };
