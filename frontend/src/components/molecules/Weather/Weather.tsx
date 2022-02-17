import React, { FunctionComponent } from 'react';
import Styled from './Weather.styled';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

interface Props {
  className?: string;
  weather: string;
}

const Weather: FunctionComponent<Props> = ({ className, weather }) => {
  return (
    <Styled.WeatherArea className={className}>
      <WbSunnyIcon />
      <Styled.Text value={weather} />
    </Styled.WeatherArea>
  );
};

export default Weather;
