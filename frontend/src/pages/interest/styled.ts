import styled from '@emotion/styled';
import {
  MainContainer as BaseMainContainer,
  Button as BaseButton,
  FooterContainer as BaseFooterContainer,
} from '@/components/atoms';
import { CheckBoxFormGroup as BaseCheckBoxFormGroup } from '@/components/molecules';

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

const InterestContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;
  justify-content: center;
  overflow: auto;
  margin: 5vh;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const CheckBoxFormGroup = styled(BaseCheckBoxFormGroup)`
  background-color: #fff;
  margin: 3px;

  & input:checked & {
    background-color: #000;
    color: #fff;
  }
`;

export default { MainContainer, InterestContainer, CheckBoxFormGroup, ButtonContainer, Button };
