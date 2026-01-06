import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../baseApi";
import { endpoints } from "./endpoints";

const agentApi = createApi({
  reducerPath: "agentApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "/agent",
  }),
  endpoints,
});

export { agentApi };
export const {
  useGetDashboardQuery,
  useCreateProfileMutation,
  useGetStudentsQuery,
} = agentApi;
