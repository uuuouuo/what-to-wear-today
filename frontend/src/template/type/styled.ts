import styled from '@emotion/styled';
import {
  MainContainer as BaseMainContainer,
  Button as BaseButton,
  FooterContainer as BaseFooterContainer,
  Heading as BaseHeading,
  Text as BaseText,
} from '@/components/atoms';
import { CheckInputFormGroup as BaseCheckInputFormGroup } from '@/components/molecules';

const MainContainer = styled(BaseMainContainer)`
  display: flex;
  flex-direction: column;
  justify-content: column;
`;

const CheckInputFormGroup = styled(BaseCheckInputFormGroup)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0px 50px 25px rgba(0, 0, 0, 0.15));

  &:nth-of-type(2n) {
    margin: 5vh 20vw 2.5vh 0;
    background-color: #fff;
  }

  &:nth-of-type(2n + 1) {
    margin: 2.5vh 0 5vh 20vw;
    background-color: #d5d5d3;
  }
`;

const Heading = styled(BaseHeading)`
  font-size: 1.5rem;
  letter-spacing: 0.3rem;
  margin-bottom: 1vh;
`;

const Text = styled(BaseText)`
  font-size: 1rem;
  letter-spacing: 0.1rem;
`;

const ButtonContainer = styled(BaseFooterContainer)`
  background-color: #fff;
`;

const Button = styled(BaseButton)`
  flex: 1;
  padding: 3vh;
  letter-spacing: 0.5rem;
`;

export default { MainContainer, CheckInputFormGroup, Heading, Text, ButtonContainer, Button };
