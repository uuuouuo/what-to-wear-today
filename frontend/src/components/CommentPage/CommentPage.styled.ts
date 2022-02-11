import styled from '@emotion/styled';
import { Button as BaseButton, Input as BaseInput } from '@/components/atoms';

const CommentPageLayout = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const WriteArea = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  margin-bottom: 1vh;
  background-color: rgb(240, 240, 240);
`;

const Button = styled(BaseButton)``;

const Input = styled(BaseInput)`
  border-bottom: 1px solid black;
  width: 75vw;
`;

export default { CommentPageLayout, WriteArea, Button, Input };
