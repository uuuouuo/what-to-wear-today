import styled from '@emotion/styled';
import {
  MainContainer as BaseMainContainer,
  Button as BaseButton,
  FooterContainer as BaseFooterContainer,
} from '@/components/atoms';

const MainContainer = styled(BaseMainContainer)`
  display: flex;
  flex-direction: column;
  justify-content: safe;
`;

const ButtonContainer = styled(BaseFooterContainer)`
  background-color: #fff;
`;

const Button = styled(BaseButton)`
  flex: 1;
  padding: 3vh;
  letter-spacing: 0.5rem;

  &.left {
    text-align: left;
  }

  &.right {
    text-align: right;
  }
`;

export default { MainContainer, ButtonContainer, Button };
