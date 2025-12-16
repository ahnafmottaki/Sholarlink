import { fetchBaseQuery, type BaseQueryFn } from "@reduxjs/toolkit/query";

const baseQuery: BaseQueryFn = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_DOMAIN!,
  credentials: "include",
});

export { baseQuery };
