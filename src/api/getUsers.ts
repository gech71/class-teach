import axios, { AxiosError } from "axios";
import apiClient from "../config/axiosConfig";

const getUsers = async <TResponse>(url: string): Promise<TResponse> => {
  const response = await fetch(url);
  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || response.statusText);
  }
  const result: TResponse = await response.json();
  return result;
};

const getUsersAxios = async <TResponse>(
  url: string,
  controller: AbortController
): Promise<TResponse> => {
  try {
    const response = await apiClient.get<TResponse>("/users", {
      signal: controller.signal,
      timeout: 10000,
    });
    return response.data;
  } catch (error) {
    const err = error as AxiosError<any>;
    if (err.code === "ECONNABORTED") {
      throw new Error("Request timed out : " + err.message);
    }
    if (axios.isCancel(err)) {
      throw new Error("Request cancelled : " + err.message);
    }
    throw new Error(err.message || "Something went wrong");
  }
};

export { getUsers, getUsersAxios };
