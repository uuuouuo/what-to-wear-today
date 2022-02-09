import styled from '@emotion/styled';
import { MainContainer as BaseMainContainer } from '@/components/atoms';
import { Input as BaseInput } from '@/components/atoms';

const MainContainer = styled(BaseMainContainer)`
  text-align: center;
  justify-content: start;
`;

const Input = styled(BaseInput)`
  width: 75vw;
`;

const rowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const columnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const contentContainer = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export default { MainContainer, Input, rowContainer, columnContainer, contentContainer };
