import { ACCOUNT_TYPES } from "@/constants/document-types";

type GetAgent = {
  _id: string;
  country: {
    callingCode: string;
    name: { common: string };
  };
  contactNo: string;
  role: "agent";
  name: string;
  email: string;
  address: string;
  accountType: keyof typeof ACCOUNT_TYPES;
  documentType: string;
  orgName?: string;
  documentUrl: string;
  status: "approved" | "pending" | "rejected";
  createdAt: string;
};

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

export type { ManageAgentRes, GetAgent };
