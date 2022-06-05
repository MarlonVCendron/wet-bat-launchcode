import axios, { AxiosRequestConfig } from 'axios';

const api = async () => {
  const client = axios.create({
    baseURL:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:5000'
        : 'https://wet-bat.xyz/api',
    headers: {
      'Content-type': 'application/json',
    },
  });

  return {
    post<T>(url: string, data?: T, config?: AxiosRequestConfig): Promise<T> {
      return client.post(url, data, config);
    },
    put<T>(url: string, data?: T, config?: AxiosRequestConfig): Promise<T> {
      return client.put(url, data, config);
    },
    get<T>(url: string, data?: T): Promise<T> {
      return client.get(url, data);
    },
    delete<T>(url: string, data?: T): Promise<T> {
      return client.delete(url, data);
    },
  };
};

export default api;
