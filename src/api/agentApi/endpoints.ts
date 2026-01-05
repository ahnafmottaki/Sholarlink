import type { ServerRes } from "@/types/axios";
import type { Builder } from "../baseApi";

const endpoints = (builder: Builder<"agentApi">) => ({
  getDashboard: builder.query<ServerRes, void>({
    query: () => ({
      url: "/",
      method: "GET",
    }),
  }),
  createProfile: builder.mutation<ServerRes, FormData>({
    query: (formData) => ({
      url: "",
      method: "POST",
      body: formData,
    }),
  }),
});

export { endpoints };
