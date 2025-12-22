import type { ServerRes } from "@/types/axios";
import type { Builder } from "../publicApi";

export const endpoints = (builder: Builder<"adminApi">) => ({
  getAdminDashboard: builder.query<ServerRes, void>({
    query: () => ({
      url: `/`,
      method: "GET",
    }),
  }),
});
