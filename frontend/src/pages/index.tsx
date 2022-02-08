import type { NextPage } from 'next';
import React from 'react';
import { useEffect } from 'react';

const Home: NextPage = () => {
  // 위도 경도값 받기
  useEffect(() => {
    if (navigator) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        const latitude: number = position.coords.latitude;
        const longitude: number = position.coords.longitude;
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        // 위도 경도 리턴값
        // latitude, longitude
      });
    }
  });
  return <></>;
};
export default Home;
