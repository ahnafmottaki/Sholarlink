import type { AxiosError, AxiosResponse } from "axios";
type ServerError = { success: false; error: string };
type ApiError = AxiosError<{
  success: false;
  error: string;
}>;

type ServerRes<T = void> = T extends void
  ? {
      success: true;
      message: string;
    }
  : {
      success: true;
      message: string;
      data: T;
    };

type ApiResponse<T = void> = AxiosResponse<ServerRes<T>>;

// export type { Response, LoadedResponse, FailedResponse };
export type { ApiResponse, ApiError, ServerRes, ServerError };
