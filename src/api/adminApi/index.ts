import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../baseApi";
import { endpoints } from "./endpoints";

const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "/admin",
  }),
  endpoints: endpoints,
  tagTypes: ["Agent"],
});

export { adminApi };
export const {
  useGetAdminDashboardQuery,
  useGetAgentsQuery,
  useGetAgentQuery,
  useUpdateAgentStatusMutation,
  useGetStudentsQuery,
  useGetAdminStudentQuery,
} = adminApi;
