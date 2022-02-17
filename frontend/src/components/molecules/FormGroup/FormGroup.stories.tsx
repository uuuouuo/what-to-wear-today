import React from 'react';
import { select, text } from '@storybook/addon-knobs';

import { useChange } from '@/hooks';

import FormGroup from './FormGroup';

export default {
  title: 'Molecules/FormGroup',
  component: FormGroup,
};

export const Default = () => {
  const [value, , onchangeValue] = useChange('');
  const label = text('label', 'nickname');
  const type = select('type', ['text', 'password', 'email'], 'text', 'GROUP-ID1');
  return <FormGroup value={value} onChange={onchangeValue} type={type} label={label} />;
};
