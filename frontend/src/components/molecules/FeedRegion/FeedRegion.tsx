import React from 'react';
import Styled from './FeedRegion.styled';
import { Text } from '@/components/atoms';
import { RegionType } from '@/types/region';

import { Swiper, SwiperSlide } from 'swiper/react';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import SwiperCore, { Pagination } from 'swiper';
SwiperCore.use([Pagination]);

import 'swiper/css';

const interestRegions: RegionType[] = [
  { id: 1, name: 'seoul' },
  { id: 2, name: 'gwangju' },
  { id: 3, name: 'ahnyang' },
  { id: 4, name: 'daejeon' },
  { id: 5, name: 'busan' },
];

// const [currentType, SetCurrentType] = useState(1);

const RegionFilter = () => {
  return (
    <Styled.Container>
      <Swiper
        direction="horizontal"
        centeredSlides
        pagination={{
          clickable: true,
          type: 'custom',
        }}
      >
        {interestRegions.map((region) => (
          <SwiperSlide>
            <Styled.SwiperSlideContainer>
              <Text value={region.name} />
              <Styled.WeatherArea>
                <WbSunnyIcon />
                <Text value="-3" />
              </Styled.WeatherArea>
            </Styled.SwiperSlideContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </Styled.Container>
  );
};

export default RegionFilter;
