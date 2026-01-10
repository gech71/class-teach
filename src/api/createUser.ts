import axios, { AxiosError } from "axios";

const createUser = async <TResponse, TBody>(
  url: string,
  body: TBody
): Promise<TResponse> => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || response.statusText);
  }

  return response.json();
};

const createUserAxios = async <TResponse, TBody>(
  url: string,
  body: TBody
): Promise<TResponse> => {
  try {
    const response = await axios.post<TResponse>(url, body);
    return response.data;
  } catch (error) {
    const err = error as AxiosError<any>;
    throw new Error(err.message || "Something went wrong");
  }
};
export { createUser, createUserAxios };
