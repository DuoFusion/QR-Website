import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { Params } from "../types";
import { HTTP_STATUS, ROUTES } from "../constants";
import { message } from "antd";
import { ErrorMessage } from "../utils/errorMessage";

let isRedirecting = false;

async function Get<T>(url: string, params?: Params, headers?: Record<string, string>): Promise<T> {

  const config: AxiosRequestConfig = {
    method: "GET",
    headers: {
      ...headers,
    },
    params,
  };

  try {
    const response = await axios.get<T>(url, config);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<any>;

    const responseData = axiosError.response?.data as { message?: string };
    const errorMessage = responseData?.message || axiosError.message || "Something went wrong";
    const status = axiosError?.response?.status;

    if (status === HTTP_STATUS.UNAUTHORIZED && !isRedirecting) {
      isRedirecting = true;
      window.location.href = ROUTES.HOME;
      setTimeout(() => (isRedirecting = false), 1000);
    } else {
      message.error(ErrorMessage(errorMessage));
    }
    throw null;
  }
}

export default Get;
