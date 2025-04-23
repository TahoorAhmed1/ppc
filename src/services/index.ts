import axios from "axios";

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/api`;

interface CustomAxiosInstance {
  defaults: any;

  interceptors: {
    request: {
      use: (
        onFulfilled: (config: any) => any,
        onRejected?: (error: any) => any
      ) => void;
    };
    response: {
      use: (
        onFulfilled: (response: any) => any,
        onRejected?: (error: any) => any
      ) => void;
    };
  };

  get: (url: string, config?: any) => Promise<any>;
  post: (url: string, data?: any, config?: any) => Promise<any>;
  put: (url: string, data?: any, config?: any) => Promise<any>;
  delete: (url: string, config?: any) => Promise<any>;
  patch: (url: string, data?: any, config?: any) => Promise<any>;
  request: (config: any) => Promise<any>;

  storeContactForm: (data: Record<string, any>) => Promise<any>;
}

const axiosInstance = axios.create({
  baseURL: BASE_URL,
}) as any;

axiosInstance.storeContactForm = (data: Record<string, any>) => {
  return axiosInstance.post("/store-contact-form", data);
};

const API: CustomAxiosInstance = axiosInstance;

export { API };
