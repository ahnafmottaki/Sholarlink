import { ACCOUNT_TYPES } from "@/constants/document-types";

type ManageAgentRes = {
  _id: string;
  name: string;
  email: string;
  orgName?: string;
  country: string;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
  updatedAt: string;
  accountType: keyof typeof ACCOUNT_TYPES;
};

export type { ManageAgentRes };
