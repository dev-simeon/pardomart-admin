/**
 * API utility for making HTTP requests
 * Use this to call your backend APIs from any component
 */

const API_BASE_URL = process.env.VITE_API_BASE_URL || "http://localhost:3000/api";

export async function apiCall<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }

  return response.json() as Promise<T>;
}

export const api = {
  get: <T,>(endpoint: string) => 
    apiCall<T>(endpoint, { method: "GET" }),
  
  post: <T,>(endpoint: string, data: unknown) =>
    apiCall<T>(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
    }),
  
  put: <T,>(endpoint: string, data: unknown) =>
    apiCall<T>(endpoint, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  
  delete: <T,>(endpoint: string) =>
    apiCall<T>(endpoint, { method: "DELETE" }),
};
