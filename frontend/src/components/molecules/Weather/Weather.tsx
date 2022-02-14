import React, { FunctionComponent } from 'react';
import Styled from './Weather.styled';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

interface Props {
  className?: string;
  weather: string;
  temperature: number;
}

const Weather: FunctionComponent<Props> = ({ className, weather, temperature }) => {
  return (
    <Styled.WeatherArea className={className}>
      <WbSunnyIcon />
      <Styled.Text value={weather} />
      {/* <Styled.Text value={temperature} /> */}
    </Styled.WeatherArea>
  );
};

export default Weather;
