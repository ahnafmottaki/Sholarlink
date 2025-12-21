import { createApi } from "@reduxjs/toolkit/query/react";
import { endpoints } from "./endpoints";
import { axiosBaseQuery } from "../baseApi";
// import { baseQuery } from "../baseApi";

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: axiosBaseQuery({}),
  endpoints,
});
export const { useRegisterMutation, useAgentLoginMutation } = authApi;
export { authApi };
