import styled from '@emotion/styled';
import { MainContainer as BaseMainContainer, Button as BaseButton } from '@/components/atoms';

const MainContainer = styled(BaseMainContainer)`
  display: flex;
  flex-direction: column;
  justify-content: column;

  overflow: hidden;
  position: relative;
`;

const Button = styled(BaseButton)`
  width: 100vw;
  padding: 3vh;
  letter-spacing: 5px;
`;

export default { MainContainer, Button };
