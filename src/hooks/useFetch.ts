import { useEffect, useState } from "react";
type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface FetchOptions<TBody> {
  method?: HttpMethod;
  body?: TBody;
  headers?: HeadersInit;
}

const useFetch = <TResponse, TBody = unknown>(
  url: string,
  options: FetchOptions<TBody> = {} as FetchOptions<TBody>
) => {
  const { method = "GET", body, headers } = options;

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<TResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method,
          headers: {
            "Content-Type": "application/json",
            ...headers,
          },
          body: body ? JSON.stringify(body) : undefined,
        });

        if (!response.ok) {
          const text = await response.text();
          throw new Error(text || response.statusText);
        }

        const result: TResponse = await response.json();
        setData(result);
      } catch (error: any) {
        setError(error.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method, body, headers]);

  return { data, loading, error };
};

export default useFetch;
