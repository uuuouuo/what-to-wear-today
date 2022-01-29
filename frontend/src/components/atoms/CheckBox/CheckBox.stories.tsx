import React from 'react';

import { useCheck } from '@/hooks';

import CheckBox from './CheckBox';

export default {
  title: 'Atoms/CheckBox',
  component: CheckBox,
};

export const Default = () => {
  const [values, , onChange] = useCheck(['123', '345']);
  return values.map((value) => (
    <CheckBox
      value={value}
      checked={values.filter((v: string) => v === value).length > 0}
      onChange={onChange}
    />
  ));
};
