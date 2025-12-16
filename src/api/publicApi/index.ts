import {
  createApi,
  type BaseQueryFn,
  type EndpointBuilder,
} from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../baseApi";
import { endpoints } from "./endpoints";

export type Builder<T extends string> = EndpointBuilder<BaseQueryFn, never, T>;

const publicApi = createApi({
  reducerPath: "publicApi",
  baseQuery: baseQuery,
  endpoints: endpoints,
});
export const { useGetCountriesQuery } = publicApi;
export default publicApi;
