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

export { deleteUser };
