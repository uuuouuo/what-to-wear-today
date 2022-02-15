import styled from '@emotion/styled';
import { MainContainer as BaseMainContainer, Input as BaseInput } from '@/components/atoms';
import { Button as BaseButton } from 'components/atoms';

const MainContainer = styled(BaseMainContainer)`
  text-align: center;
  justify-content: start;
`;

const Input = styled(BaseInput)`
  flex: 1;
  background-color: transparent;
  border-bottom: 1px solid #fff;
  color: #fff;

  &::placeholder {
    color: #ccc;
  }
`;

const RowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 25px;
  color: #fff;
  padding: 0 10vw;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ContentContainer = styled.div`
  margin-top: 5vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Button = styled(BaseButton)`
  flex: 1;
  padding: 0.5vh;
  width: 100%;
  background-color: #000;
  color: #fff;
`;

export default { MainContainer, Input, RowContainer, ColumnContainer, ContentContainer, Button };
