import styled from '@emotion/styled';
import { MainContainer as BaseMainContainer, Button as BaseButton } from '@/components/atoms';
import { FormGroup as BaseFormGroup } from '@/components/molecules';

const MainContainer = styled(BaseMainContainer)`
  text-align: center;
  justify-content: start;
`;

const FormGroup = styled(BaseFormGroup)`
  /* filter: drop-shadow(0px -20px 25px rgba(0, 0, 0, 0.05))
    drop-shadow(0px 50px 25px rgba(0, 0, 0, 0.1)); */
  background-color: #fff;
  box-sizing: border-box;
  height: 12vh;
  width: 40vh;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  transform: translateY(-5vh);
  margin: 5vh;
  margin-top: 10vh;
`;

const Button = styled(BaseButton)`
  width: 100vw;
  padding: 3vh;
  letter-spacing: 5px;
  box-sizing: border-box;
  height: 12vh;
  width: 3vh;
`;

const RegionBox = styled.div`
  margin-top: 1vh;
  background-color: #fff;
  height: 5vh;
  width: 30vh;
  border-radius: 5px;
`;

const columnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export default { MainContainer, FormGroup, SearchContainer, Button, RegionBox, columnContainer };
