import styled from '@emotion/styled';
import { Button as BaseButton, Textarea as BaseTextarea } from '@/components/atoms';

const Form = styled.form`
  display: flex;
  background-color: '#fff';
  margin: 1vh 0;
`;

const Button = styled(BaseButton)`
  flex: 1;
  background-color: #000;
  color: #fff;
  margin-left: 1vw;
`;

const Textarea = styled(BaseTextarea)`
  flex: 9;
  border: 2px solid #000;
  padding: 0.5vh;
`;

export default { Form, Button, Textarea };
