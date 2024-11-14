import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

// Base URL for the API
const BASE_URL = "https://sandbox.depasify.com/";

// Create an Axios instance for protected routes
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

function configureRequest(config: AxiosRequestConfig): InternalAxiosRequestConfig {
  const token = "sbx_ba0cd29fae30022844b9b4a47e931998876b416e8b441d18b938d26f171473cd";
  const internalConfig = config as InternalAxiosRequestConfig;
  internalConfig.headers = internalConfig.headers || {};
  if (token) {
    internalConfig.headers["Authorization"] = `${token}`;
  }
  return internalConfig;
}

// Request interceptor for protected routes
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => configureRequest(config),
  (error) => {
    return Promise.reject(error);
  },
);

// Create another Axios instance for unprotected routes
const axiosInstanceUnprotected = axios.create({
  baseURL: BASE_URL,
});

export { axiosInstance, axiosInstanceUnprotected };
