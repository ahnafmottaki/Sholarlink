import type DOCUMENT_TYPES from "@/constants/document-types";

type ManageAgentRes = {
  _id: string;
  full_name?: string;
  email?: string;
  organization_email?: string;
  organization_name?: string;
  country: string;
  status: "pending" | "approved" | "rejected";
  created_at: string;
  account_type: keyof typeof DOCUMENT_TYPES;
};

export type { ManageAgentRes };
