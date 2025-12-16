import type { ServerRes } from "@/types/axios";
import type { Builder } from "../publicApi";

const endpoints = (builder: Builder<"authApi">) => ({
  register: builder.mutation<ServerRes, FormData>({
    query: (credentials) => ({
      url: "/auth/register",
      method: "POST",
      body: credentials,
    }),
  }),
});

export { endpoints };
