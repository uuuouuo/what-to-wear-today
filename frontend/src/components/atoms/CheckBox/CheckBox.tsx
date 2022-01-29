import React, { FunctionComponent } from 'react';
import Styled from './CheckBox.styled';

interface Props {
  className?: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox: FunctionComponent<Props> = ({ className, value, checked, onChange }) => {
  return (
    <Styled.CheckBox
      className={className}
      type="checkbox"
      checked={checked}
      value={value}
      onChange={onChange}
    />
  );
};

export default CheckBox;
