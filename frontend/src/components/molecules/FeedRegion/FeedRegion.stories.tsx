import React from 'react';
import FeedRegion from './FeedRegion';
import { RegionType } from '@/types/region';

export default {
  title: 'Molecules/FeedRegion',
  component: FeedRegion,
};

export const Defalut = () => {
  const interestRegions: RegionType[] = [
    { no: 1, regionName: 'seoul', temperature: -3 },
    { no: 2, regionName: 'gwangju', temperature: -1 },
    { no: 3, regionName: 'ahnyang', temperature: 1 },
    { no: 4, regionName: 'daejeon', temperature: 5 },
    { no: 5, regionName: 'busan', temperature: 7 },
  ];

  return <FeedRegion interestRegions={interestRegions} />;
};
