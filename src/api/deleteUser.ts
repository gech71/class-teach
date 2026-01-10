import axios, { AxiosError } from "axios";

const deleteUser = async <TResponse = void>(
  url: string
): Promise<TResponse> => {
  const response = await fetch(url, {
    method: "DELETE",
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || response.statusText);
  }

  // Some APIs return 204 No Content
  if (response.status === 204) {
    return undefined as TResponse;
  }

  return response.json();
};

const deleteUserAxios = async <TResponse = void>(
  url: string
): Promise<TResponse> => {
  try {
    const response = await axios.delete<TResponse>(url);
    return response.data;
  } catch (error) {
    const err = error as AxiosError<any>;
    throw new Error(err.message || "Something went wrong");
  }
};

export { deleteUser, deleteUserAxios };
