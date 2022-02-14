import React, { FunctionComponent } from 'react';
import Styled from './Input.styled';

interface Props {
  className?: string;
  placeholder?: string;
  value: string | number | Date;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FunctionComponent<Props> = ({
  className,
  placeholder = '',
  value,
  type = 'text',
  onChange,
}) => {
  return (
    <Styled.Input
      className={className}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
