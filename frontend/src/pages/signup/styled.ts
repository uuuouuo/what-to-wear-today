import styled from '@emotion/styled';
import { MainContainer as BaseMainContainer, Button as BaseButton } from '@/components/atoms';
import { FormGroupWithIcon as BaseFormGroupWithIcon } from '@/components/molecules';

const MainContainer = styled(BaseMainContainer)`
  text-align: center;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(-5vh);
  margin: 5vh;
`;

const FormGroupWithIcon = styled(BaseFormGroupWithIcon)`
  filter: drop-shadow(0px -20px 25px rgba(0, 0, 0, 0.05))
    drop-shadow(0px 50px 25px rgba(0, 0, 0, 0.1));
  background-color: #fff;
  margin-top: 3vh;
`;

const Button = styled(BaseButton)`
  width: 100vw;
  padding: 3vh;
  letter-spacing: 5px;
`;

export default { MainContainer, ProfileContainer, FormGroupWithIcon, Button };
