import { WeatherType } from '@/types/weather';
import { apiInstance } from '@/libs/axios';
import { AxiosResponse } from 'axios';

const api = apiInstance();

export default async (region: string, date: string) => {
  const { data } = await api.get(`/weather?region=${region}&date=${date}`);
  return data;
};
