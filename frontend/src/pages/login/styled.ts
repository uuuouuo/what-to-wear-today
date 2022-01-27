import styled from '@emotion/styled';
import BaseHeading from '@/components/atoms/Heading/Heading';

const Container = styled.div`
  position: relative;
  height: 100vh;
  padding: 5vh;
  text-align: center;
  filter: drop-shadow(0px 20px 10px rgba(0, 0, 0, 0.15));
  background-image: linear-gradient(135deg, #ad6bff 0%, #74bcf7 100%);
  box-sizing: border-box;
`;

const LogoContainer = styled.div`
  margin-top: 100px;
`;

const Title = styled(BaseHeading)`
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 0.7rem;
  filter: drop-shadow(0px 50px 25px rgba(0, 0, 0, 0.15));
  margin-top: 8vh;
`;

const ButtonContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 5vh;
`;

export default { Container, LogoContainer, Title, ButtonContainer };
