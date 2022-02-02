import React from 'react';
import { useCheck } from '@/hooks';

import { Text } from '@/components/atoms';

import CheckInputFormGroup from './CheckInputFormGroup';

export default {
  title: 'Molecules/CheckInputFormGroup',
  component: CheckInputFormGroup,
};

export const Defalut = () => {
  const [values, , onChange] = useCheck(['123', '345']);
  return values.map((value) => (
    <CheckInputFormGroup
      value={value}
      type="checkbox"
      checked={values.filter((v: string) => v === value).length > 0}
      onChange={onChange}
      name="number"
    >
      <Text value={value} />
    </CheckInputFormGroup>
  ));
};
