import type { ServerRes } from "@/types/axios";
import type { Builder } from "../baseApi";
import type { ManageStudentProps } from "@/types/student";

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
  getStudents: builder.query<ServerRes<ManageStudentProps[]>, void>({
    query: () => ({
      url: "/students",
      method: "GET",
    }),
  }),
});

export { endpoints };
