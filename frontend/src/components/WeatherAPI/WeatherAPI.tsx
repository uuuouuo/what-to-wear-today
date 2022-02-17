import React, { useState, useEffect, FunctionComponent } from 'react';
import { apiInstance } from '@/libs/axios';

interface Props {
  region: string;
  date: string;
}

const WeatherAPI: FunctionComponent<Props> = ({ region, date }) => {
  const [weatherData, setWeatherData] = useState();
  const api = apiInstance();
  useEffect(() => {
    const weather: Promise<any> = api
      .get(`/weather?region=${region}&date=${date}`)
      .then((res) => setWeatherData(res));
  }, [region, date]);

  return (
    <div>
      {weatherData ? weatherData.data.temperatures : ''}
      {weatherData ? weatherData.data.curWeather : ''}
    </div>
  );
};

export default WeatherAPI;
