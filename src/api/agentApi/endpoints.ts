import type { ServerRes } from "@/types/axios";
import type { Builder } from "../publicApi";

const endpoints = (builder: Builder<"agentApi">) => ({
  getDashboard: builder.query<ServerRes, void>({
    query: () => ({
      url: "/agent",
      method: "GET",
    }),
  }),
});

export { endpoints };
