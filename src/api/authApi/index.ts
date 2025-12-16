import { createApi } from "@reduxjs/toolkit/query/react";
import { endpoints } from "./endpoints";
import { baseQuery } from "../baseApi";

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQuery,
  endpoints,
});
export const { useRegisterMutation } = authApi;
export { authApi };
