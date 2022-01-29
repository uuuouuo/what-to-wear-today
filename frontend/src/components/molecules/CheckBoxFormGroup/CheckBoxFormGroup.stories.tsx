import React from 'react';
import { useCheck } from '@/hooks';

import CheckBoxFormGroup from './CheckBoxFormGroup';

export default {
  title: 'Molecules/CheckBoxFormGroup',
  component: CheckBoxFormGroup,
};

export const Defalut = () => {
  const [values, , onChange] = useCheck(['123', '345']);
  return values.map((value) => (
    <CheckBoxFormGroup
      value={value}
      checked={values.filter((v: string) => v === value).length > 0}
      onChange={onChange}
    />
  ));
};
