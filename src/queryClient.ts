import { QueryClient } from "@tanstack/react-query";

type AnyObj = { [key: string]: any };

const BASE_URL = "https://fakestoreapi.com";

export const getClient = (() => {
  let client: QueryClient | null = null;
  return () => {
    if (!client) client = new QueryClient();
    return client;
  };
})();

export const fetcher = async ({
  method,
  path,
  body,
  params,
}: {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  path: string;
  body?: AnyObj;
  params?: AnyObj;
}) => {
  try {
    const url = `${BASE_URL}${path}`;
    const fetchOptions: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": BASE_URL,
      },
    };
    const res = await fetch(url, fetchOptions);
    const json = await res.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

export const QueryKeys = {
  PRODUCTS: "PRODUCTS",
};
