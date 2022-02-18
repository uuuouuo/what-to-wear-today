import styled from '@emotion/styled';
import { TextEditor as BaseTextEditor } from '@/components/molecules';
import { Button as BaseButton, Input as BaseInput } from 'components/atoms';

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1vh 0.5vh;
`;

const Button = styled(BaseButton)`
  padding: 1vh 3.5vw;
  color: #fff;
  border: 1px solid #fff;
`;

const ContentContainer = styled.div`
  margin: 3vh 1.5vh 0;
  overflow-y: scroll;
`;

const TextEditor = styled(BaseTextEditor)`
  z-index: 0;
  width: 350px;
  height: 255px;
  box-sizing: border-box;
  background-color: #fff;
  padding-top: 5vh;
  transform: translate(7vw, -5vh);
`;

const InputContainer = styled.div`
  transform: translateY(-5vh);
  width: 100%;
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

export default {
  ButtonContainer,
  Button,
  ContentContainer,
  TextEditor,
  Input,
  RowContainer,
  InputContainer,
};
