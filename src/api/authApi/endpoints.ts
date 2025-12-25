import type { ServerRes } from "@/types/axios";
import type { Builder } from "../baseApi";

const endpoints = (builder: Builder<"authApi">) => ({
  register: builder.mutation<ServerRes, FormData>({
    query: (credentials) => ({
      url: "/register",
      method: "POST",
      body: credentials,
    }),
  }),
  agentLogin: builder.mutation<
    ServerRes,
    { username: string; password: string }
  >({
    query: ({ username, password }) => ({
      url: "/login",
      method: "POST",
      body: { username, password },
    }),
  }),
  adminLogin: builder.mutation<
    ServerRes,
    { username: string; password: string }
  >({
    query: ({ username, password }) => ({
      url: "/adminLogin",
      method: "POST",
      body: { username, password },
    }),
  }),
  logout: builder.mutation<ServerRes, void>({
    query: () => ({
      url: `/logout`,
      method: "POST",
    }),
  }),
});

export { endpoints };
