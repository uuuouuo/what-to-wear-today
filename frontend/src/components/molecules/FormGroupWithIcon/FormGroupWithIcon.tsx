import React, { FunctionComponent } from 'react';
import Styled from './FormGroupWithIcon.styled';
import Input from '@/components/atoms/Input/Input';

interface Props {
  className?: string;
  placeholder?: string;
  value: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children: React.ReactChild;
}

const FormGroupWithIcon: FunctionComponent<Props> = ({
  className,
  placeholder = '',
  value,
  type = 'text',
  onChange,
  children,
}) => {
  return (
    <Styled.FormGroupWithIcon className={className}>
      <Styled.Label>
        {children}
        <Input placeholder={placeholder} value={value} type={type} onChange={onChange} />
      </Styled.Label>
    </Styled.FormGroupWithIcon>
  );
};

export default FormGroupWithIcon;
