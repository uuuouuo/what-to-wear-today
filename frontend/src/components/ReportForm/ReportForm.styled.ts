import styled from '@emotion/styled';
import { Button as BaseButton } from '@/components/atoms';

const FormContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
`;

const Button = styled(BaseButton)`
  color: white;
  background-color: red;
  padding: 1vh 3vw 1vh 3vw;
`;

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 320,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 3,
};

export default { FormContainer, Button, style };
