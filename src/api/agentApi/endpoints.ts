import type { ServerRes } from "@/types/axios";
import type { Builder } from "../baseApi";
import type { ManageStudentProps, Student } from "@/types/student";

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
  getStudent: builder.query<ServerRes<Student>, string>({
    query: (id) => ({
      url: `/students/${id}`,
      method: "GET",
    }),
  }),
});

export { endpoints };
