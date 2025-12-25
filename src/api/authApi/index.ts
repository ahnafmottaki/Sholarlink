import { createApi } from "@reduxjs/toolkit/query/react";
import { endpoints } from "./endpoints";
import { axiosBaseQuery } from "../baseApi";
// import { baseQuery } from "../baseApi";

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "/auth",
  }),
  endpoints,
});
export const {
  useRegisterMutation,
  useAgentLoginMutation,
  useAdminLoginMutation,
  useLogoutMutation,
} = authApi;
export { authApi };
