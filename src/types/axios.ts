import type { AxiosError, AxiosResponse } from "axios";
type Response = AxiosResponse<{ success: true; message: string }>;

type LoadedResponse<T> = AxiosResponse<{
  success: true;
  message: string;
  data: T;
}>;

type FailedResponse = AxiosError<{
  success: false;
  error: string;
}>;

export type { Response, LoadedResponse, FailedResponse };
