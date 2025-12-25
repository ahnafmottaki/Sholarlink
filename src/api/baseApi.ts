import { axiosInstance } from "@/hooks/useAxios";
import { type BaseQueryFn, type EndpointBuilder } from "@reduxjs/toolkit/query";
import type { AxiosError, AxiosRequestConfig } from "axios";
const axiosBaseQuery =
  ({
    baseUrl = "",
  }: {
    baseUrl?: string;
  }): BaseQueryFn<
    {
      url: string;
      method?: AxiosRequestConfig["method"];
      body?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      headers?: AxiosRequestConfig["headers"];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, body, params, headers }) => {
    try {
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data: body,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export type Builder<T extends string, X = void> = X extends string
  ? EndpointBuilder<BaseQueryFn, X, T>
  : EndpointBuilder<BaseQueryFn, never, T>;

export { axiosBaseQuery };

// const baseQuery: BaseQueryFn = fetchBaseQuery({
//   baseUrl: import.meta.env.VITE_DOMAIN!,
//   credentials: "include",
// });
