import React, { FunctionComponent } from 'react';
import Styled from './FeedRegion.styled';
import { Text } from '@/components/atoms';
import { RegionType } from '@/types/region';
import { Swiper, SwiperSlide } from 'swiper/react';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import SwiperCore, { Pagination } from 'swiper';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

SwiperCore.use([Pagination]);

interface Props {
  interestRegions: RegionType[];
}

const RegionFilter: FunctionComponent<Props> = ({ interestRegions }) => {
  return (
    <Swiper
      direction="vertical"
      centeredSlides
      pagination={{
        clickable: true,
        type: 'custom',
      }}
      style={{ height: '7vh' }}
    >
      {interestRegions.map((region: RegionType) => (
        <SwiperSlide key={region.no}>
          <Styled.SwiperSlideContainer>
            <Text value={region.regionName} />
            <Styled.WeatherArea>
              <WbSunnyIcon />
              <Text value={region.temperature} />
            </Styled.WeatherArea>
          </Styled.SwiperSlideContainer>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FeedRegion;
