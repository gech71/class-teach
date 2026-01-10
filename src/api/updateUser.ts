import axios, { AxiosError } from "axios";

type HttpMethod = "PUT" | "PATCH";

const updateUser = async <TResponse, TBody>(
  url: string,
  body: TBody,
  method: HttpMethod = "PATCH"
): Promise<TResponse> => {
  const response = await fetch(url, {
    method,
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

const updateUserAxios = async <TResponse, TBody>(
  url: string,
  body: TBody,
  method: HttpMethod = "PATCH"
): Promise<TResponse> => {
  try {
    const response =
      method === "PUT"
        ? await axios.put<TResponse>(url, body)
        : await axios.patch<TResponse>(url, body);

    return response.data;
  } catch (error) {
    const err = error as AxiosError<any>;
    throw new Error(err.message || "Something went wrong");
  }
};

export { updateUser, updateUserAxios };
