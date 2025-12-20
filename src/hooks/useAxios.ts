import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";

// Your API base URL
const API_BASE_URL = import.meta.env.VITE_DOMAIN;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

const useAxios = () => {
  const navigate = useNavigate();
  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        if (error.response?.status === 401 || error.response?.status === 403) {
          navigate("/login");
        }
        return Promise.reject(error);
      },
    );
  }, [navigate]);
};

export { axiosInstance, useAxios };
