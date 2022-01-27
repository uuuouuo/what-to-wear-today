import React, { FunctionComponent } from 'react';
import Styled from './Input.styled';

interface Props {
  placeholder?: string;
  value: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FunctionComponent<Props> = ({ placeholder = '', value, type = 'text', onChange }) => {
  return <Styled.Input type={type} placeholder={placeholder} value={value} onChange={onChange} />;
};

export default Input;
