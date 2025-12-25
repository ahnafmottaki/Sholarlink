import type { ServerRes } from "@/types/axios";
import type { Builder } from "../baseApi";
import type { GetAgent, ManageAgentRes } from "@/types/admin-response";

export const endpoints = (builder: Builder<"adminApi", "Agent">) => ({
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
  getAgent: builder.query<ServerRes<GetAgent>, string>({
    query: (id) => ({
      url: `/agents/${id}`,
      method: "GET",
    }),
    keepUnusedDataFor: 15 * 60,
  }),
});
