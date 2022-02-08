import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
SwiperCore.use([Pagination]);

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import 'swiper/css';
import 'swiper/css/pagination';

const swipe = css`
  height: 6vh;
  width: 100px;
  margin: 0px 0px 0px 0px;
`;

interface regionType {
  id: number;
  name: string;
}

const interestRegions: regionType[] = [
  { id: 1, name: 'seoul' },
  { id: 2, name: 'gwangju' },
  { id: 3, name: 'ahnyang' },
  { id: 4, name: 'daejeon' },
  { id: 5, name: 'busan' },
];

// const [currentType, SetCurrentType] = useState(1);

const RegionFilter = () => {
  return (
    <div>
      <Swiper
        css={swipe}
        direction={'vertical'}
        centeredSlides={true}
        pagination={{
          clickable: true,
          type: 'custom',
        }}
      >
        {interestRegions.map((region) => (
          <SwiperSlide
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            key={region.id}
          >
            {region.name}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RegionFilter;
