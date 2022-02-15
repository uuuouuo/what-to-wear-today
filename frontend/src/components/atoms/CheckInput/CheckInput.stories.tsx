import React from 'react';

import { useCheck } from '@/hooks';

import CheckInput from './CheckInput';

export default {
  title: 'Atoms/CheckInput',
  component: CheckInput,
};

export const Default = () => {
  const [values, , onChange] = useCheck(['123', '345']);
  return values.map((value) => (
    <CheckInput
      key={value}
      value={value}
      type="checkbox"
      checked={values.filter((v: string) => v === value).length > 0}
      onChange={onChange}
      name="number"
    />
  ));
};
