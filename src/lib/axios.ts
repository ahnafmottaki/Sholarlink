import axios from "axios";
import React from "react";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_DOMAIN!,
  withCredentials: true,
});

const useAxios = () => {
  React.useEffect(() => {
    const resInterceptor = axiosSecure.interceptors.response.use(
      function (response) {
        return Promise.resolve(response);
      },
      (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          console.log("Unauthorized or Forbidden");
        }
        return Promise.reject(error);
      },
    );
    return () => {
      axiosSecure.interceptors.response.eject(resInterceptor);
    };
  }, []);
};

export { useAxios, axiosSecure };
