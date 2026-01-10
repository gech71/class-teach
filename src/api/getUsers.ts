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
    });
    return response.data;
  } catch (error) {
    const err = error as AxiosError<any>;
    throw new Error(err.message || "Something went wrong");
  }
};

export { getUsers, getUsersAxios };
