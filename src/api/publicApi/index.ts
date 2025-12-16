import {
  createApi,
  type BaseQueryFn,
  type EndpointBuilder,
} from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../baseApi";
import { publicApiEndpoints } from "./endpoints";

export type Builder<T extends string> = EndpointBuilder<BaseQueryFn, never, T>;

const publicApi = createApi({
  reducerPath: "publicApi",
  baseQuery: baseQuery,
  endpoints: publicApiEndpoints,
});
export const { useGetCountriesQuery } = publicApi;
export { publicApi };
