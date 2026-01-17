const getUsers = async <TResponse>(url: string): Promise<TResponse> => {
  const response = await fetch(url);
  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || response.statusText);
  }
  const result: TResponse = await response.json();
  return result;
};

export { getUsers };
