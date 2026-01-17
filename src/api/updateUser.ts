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

export { updateUser };
