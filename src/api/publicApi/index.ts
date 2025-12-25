import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../baseApi";
import { publicApiEndpoints } from "./endpoints";

const publicApi = createApi({
  reducerPath: "publicApi",
  baseQuery: axiosBaseQuery({}),
  endpoints: publicApiEndpoints,
});
export const { useGetCountriesQuery } = publicApi;
export { publicApi };
