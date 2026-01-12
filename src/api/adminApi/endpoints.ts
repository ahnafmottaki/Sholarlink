import type { ServerRes } from "@/types/axios";
import type { Builder } from "../baseApi";
import type { GetAgent, ManageAgentRes } from "@/types/admin-response";
import type { ManageStudentProps, Student } from "@/types/student";

export const endpoints = (builder: Builder<"adminApi", "Agent">) => ({
  getAdminDashboard: builder.query<ServerRes, void>({
    query: () => ({
      url: `/`,
      method: "GET",
    }),
  }),
  getAgents: builder.query<ServerRes<ManageAgentRes[]>, void>({
    query: () => ({
      url: "/agents",
      method: "GET",
    }),
    providesTags(result) {
      return result?.data
        ? ([
            { type: "Agent", id: "LIST" },
            ...result.data.map((agent) => ({ type: "Agent", id: agent._id })),
          ] as { type: "Agent"; id: string }[])
        : [{ type: "Agent", id: "LIST" }];
    },
  }),
  getAgent: builder.query<ServerRes<GetAgent>, string>({
    query: (id) => ({
      url: `/agents/${id}`,
      method: "GET",
    }),
    providesTags(result, error, arg, meta) {
      return result?.data
        ? [{ type: "Agent", id: result.data._id }]
        : [{ type: "Agent", id: arg }];
    },
    keepUnusedDataFor: 15 * 60,
  }),
  updateAgentStatus: builder.mutation<
    ServerRes,
    { id: string; status: "approved" | "rejected" }
  >({
    query(arg) {
      return {
        url: `/agents/${arg.id}`,
        method: "PATCH",
        params: {
          status: arg.status,
        },
      };
    },
    invalidatesTags(result, error, arg, meta) {
      return [
        { type: "Agent", id: arg.id },
        { type: "Agent", id: "LIST" },
      ];
    },
  }),
  getStudents: builder.query<ServerRes<ManageStudentProps[]>, void>({
    query: () => ({
      url: "/students",
      method: "GET",
    }),
  }),
  getAdminStudent: builder.query<ServerRes<Student>, string>({
    query: (id) => ({
      url: `/students/${id}`,
      method: "GET",
    }),
  }),
});
