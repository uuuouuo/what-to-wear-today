import React, { FunctionComponent } from 'react';
import Styled from './CheckInput.styled';

interface Props {
  className?: string;
  type: 'checkbox' | 'radio';
  value: string | number;
  checked: boolean;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckInput: FunctionComponent<Props> = ({
  className,
  type,
  value,
  checked,
  name,
  onChange,
}) => {
  return (
    <Styled.CheckInput
      className={className}
      type={type}
      checked={checked}
      value={value}
      name={name}
      onChange={onChange}
    />
  );
};

export default CheckInput;
