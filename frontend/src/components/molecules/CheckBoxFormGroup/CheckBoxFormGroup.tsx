import React, { FunctionComponent } from 'react';
import Styled from './CheckBoxFormGroup.styled';
import { Text, CheckBox, Label } from '@/components/atoms';

interface Props {
  className?: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormGroupWithIcon: FunctionComponent<Props> = ({ className, value, checked, onChange }) => {
  return (
    <Styled.CheckBoxFormGroup className={className}>
      <Label>
        <Text value={value} />
        <CheckBox value={value} checked={checked} onChange={onChange} />
      </Label>
    </Styled.CheckBoxFormGroup>
  );
};

export default FormGroupWithIcon;
