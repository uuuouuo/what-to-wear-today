import React, { FunctionComponent } from 'react';
import Styled from './FormGroup.styled';
import { Input, Label } from '@/components/atoms';

interface Props {
  className?: string;
  placeholder?: string;
  value: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const FormGroup: FunctionComponent<Props> = ({
  className,
  placeholder = '',
  value,
  type = 'text',
  onChange,
  label,
}) => {
  return (
    <Styled.FormGroup className={className}>
      <Label>
        <Styled.Text value={label} />
        <Input placeholder={placeholder} value={value} type={type} onChange={onChange} />
      </Label>
    </Styled.FormGroup>
  );
};

export default FormGroup;
