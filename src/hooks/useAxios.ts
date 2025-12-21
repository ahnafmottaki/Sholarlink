import type { ServerError } from "@/types/axios";
import axios, { AxiosError } from "axios";
import { useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { toast } from "sonner";

const axiosInstance = axios.create();

const getErrorMessage = (error: AxiosError): string => {
  if (error.response?.data) {
    const data = error.response.data as ServerError;
    return data.error || "An unexpected error occurred";
  }
  return error.message || "An unexpected error occurred";
};

const useAxios = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleUnauthorizedError = useCallback(
    (error: AxiosError, currentPathName: string) => {
      const publicRoutes = ["/agentLogin", "/agentRegister", "/adminLogin"];
      const isPublicRoute = publicRoutes.some((route) =>
        currentPathName.startsWith(route),
      );
      if (
        !isPublicRoute &&
        (error.response?.status === 401 || error.response?.status === 403)
      ) {
        toast.error("Your session has expired, please login again");
        localStorage.clear();
        sessionStorage.clear();
        navigate("/agentLogin", {
          state: {
            from: currentPathName,
            replace: true,
          },
        });
      }
    },
    [navigate],
  );

  useEffect(() => {
    const resInterceptor = axiosInstance.interceptors.response.use(
      (res) => {
        return res;
      },
      (error: AxiosError) => {
        if (error.response) {
          const status = error.response.status;
          const message = getErrorMessage(error);
          if (status !== 401 && status !== 403 && status !== 408) {
            toast.error(message);
          }
          switch (status) {
            case 401:
            case 403:
              handleUnauthorizedError(error, location.pathname);
              break;
            case 408:
            case 504:
              toast.error("Request timeout. Please try again.");
              break;
            case 500:
              toast.error("Server error. Please try again later.");
              break;
            case 502:
            case 503:
              toast.error("Service temporarily unavailable.");
              break;
            default:
              break;
          }
        } else if (error.request) {
          toast.error("Network error. Please try again later.");
        } else {
          toast.error("An error while setting up the request");
        }

        return Promise.reject(error);
      },
    );
    return () => {
      axiosInstance.interceptors.response.eject(resInterceptor);
    };
  }, [location.pathname, navigate, handleUnauthorizedError]);
};

export { axiosInstance, useAxios };
