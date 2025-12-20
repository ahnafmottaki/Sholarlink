import { type BaseQueryFn } from "@reduxjs/toolkit/query";
import type { AxiosError, AxiosRequestConfig } from "axios";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_DOMAIN!;
const axiosBaseQuery =
  ({
    baseUrl = BASE_URL,
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
      console.log("from base query fn", body);
      const result = await axios({
        url: baseUrl + url,
        method,
        data: body,
        params,
        headers,
        withCredentials: true,
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

export { axiosBaseQuery };

// const baseQuery: BaseQueryFn = fetchBaseQuery({
//   baseUrl: import.meta.env.VITE_DOMAIN!,
//   credentials: "include",
// });
