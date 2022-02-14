import React from 'react';
import FeedRegion from './FeedRegion';
import { RegionType } from '@/types/region';

export default {
  title: 'Molecules/FeedRegion',
  component: FeedRegion,
};

export const Defalut = () => {
  const interestRegions: RegionType[] = [
    { no: 1, regionName: 'seoul', weather: '맑음' },
    { no: 2, regionName: 'gwangju', weather: '맑음' },
    { no: 3, regionName: 'ahnyang', weather: '맑음' },
    { no: 4, regionName: 'daejeon', weather: '맑음' },
    { no: 5, regionName: 'busan', weather: '맑음' },
  ];

  return <FeedRegion interestRegions={interestRegions} />;
};
