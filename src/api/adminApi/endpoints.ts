import type { ServerRes } from "@/types/axios";
import type { Builder } from "../publicApi";
import type { GetAgent, ManageAgentRes } from "@/types/admin-response";

export const endpoints = (builder: Builder<"adminApi">) => ({
  getAdminDashboard: builder.query<ServerRes, void>({
    query: () => ({
      url: `/`,
      method: "GET",
    }),
  }),
  getAgents: builder.query<ServerRes<ManageAgentRes[]>, void>({
    query: () => ({
      url: "/agents",
      method: "GET",
    }),
  }),
  getAgent: builder.query<ServerRes<GetAgent>, { id: string }>({
    query: (prop) => ({
      url: `/agents/${prop.id}`,
      method: "GET",
    }),
  }),
});
