import React, { useState, useEffect, FunctionComponent, Dispatch, SetStateAction } from 'react';
import { apiInstance } from '@/libs/axios';
import { AxiosResponse } from 'axios';
import { WeatherType } from '@/types/weather';

interface Props {
  region: string;
  date: string;
}

const WeatherAPI: FunctionComponent<Props> = ({ region, date }) => {
  const [weatherData, setWeatherData]: [
    WeatherType | null,
    Dispatch<SetStateAction<WeatherType | null>>,
  ] = useState(null);
  const api = apiInstance();
  useEffect(() => {
    const weather = api
      .get(`/weather?region=${region}&date=${date}`)
      .then((res: AxiosResponse<WeatherType>) => setWeatherData(res.data));
  }, [region, date]);

  return (
    <div>
      {weatherData ? weatherData.temperatures : 'Loading'}
      {weatherData ? weatherData.curWeather : 'Loading'}
    </div>
  );
};

export default WeatherAPI;
