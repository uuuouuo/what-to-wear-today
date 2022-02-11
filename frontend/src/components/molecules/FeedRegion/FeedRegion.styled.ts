import styled from '@emotion/styled';

const SwiperSlideContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2vh;
`;

const WeatherArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & span {
    margin-left: 2vw;
  }
`;

export default { SwiperSlideContainer, WeatherArea };
