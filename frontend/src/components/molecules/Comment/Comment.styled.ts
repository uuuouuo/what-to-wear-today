import styled from '@emotion/styled';
import { Button as BaseButton, Input as BaseInput } from '@/components/atoms';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  margin: 2vh;
  padding: 1.5vh;
  background-color: #fff;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  & button {
    padding: 1vh 1vw;
  }

  & button:nth-child(1) {
    margin-right: 0.5vh;
  }
`;

const ContentContainer = styled.div`
  margin: 1vh;
`;

export default { Container, ButtonContainer, ContentContainer };
