import styled from '@emotion/styled';

const Container = styled.div`
  height: 7vh;
  z-index: 1;
`;

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
`;

export default { Container, SwiperSlideContainer, WeatherArea };
