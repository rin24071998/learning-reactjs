import axios, { AxiosError, AxiosRequestConfig } from 'axios';

const DEFAULT_API_CONFIG: AxiosRequestConfig = {
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 30000,
};

const instance = axios.create({
  ...DEFAULT_API_CONFIG,
});

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    return error;
  }
);

export default instance;
