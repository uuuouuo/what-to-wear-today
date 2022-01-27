import React, { FunctionComponent } from 'react';
import Styled from './FormGroup.styled';
import Input from '@/components/atoms/Input/Input';
import Label from '@/components/atoms/Label/Label';

interface Props {
  className?: string;
  placeholder?: string;
  value: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children: React.ReactChild;
}

const FormGroup: FunctionComponent<Props> = ({
  className,
  placeholder = '',
  value,
  type = 'text',
  onChange,
  children,
}) => {
  return (
    <Styled.FormGroup className={className}>
      <Label>
        {children}
        <Input placeholder={placeholder} value={value} type={type} onChange={onChange} />
      </Label>
    </Styled.FormGroup>
  );
};

export default FormGroup;
