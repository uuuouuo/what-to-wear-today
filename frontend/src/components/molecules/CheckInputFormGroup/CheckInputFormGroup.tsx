import React, { FunctionComponent } from 'react';
import Styled from './CheckInputFormGroup.styled';
import { CheckInput, Label } from '@/components/atoms';

interface Props {
  className?: string;
  value: string | number;
  type: 'checkbox' | 'radio';
  checked: boolean;
  name: string;
  children: React.ReactNode | React.ReactNode[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckInputFormGroup: FunctionComponent<Props> = ({
  className,
  type,
  value,
  checked,
  name,
  children,
  onChange,
}) => {
  return (
    <Styled.CheckInputFormGroup className={`${className} ${checked ? 'checked' : ''}`}>
      {children}
      <CheckInput value={value} type={type} checked={checked} name={name} onChange={onChange} />
    </Styled.CheckInputFormGroup>
  );
};

export default CheckInputFormGroup;
