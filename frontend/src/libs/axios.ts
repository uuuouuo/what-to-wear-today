import axios, { AxiosInstance } from 'axios';
import { API_BASE_URL } from '@/config';

const apiInstance = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      'Content-type': 'application/json',
    },
  });
  return instance;
};

export { apiInstance };
