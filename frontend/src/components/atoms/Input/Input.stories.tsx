import React from 'react';
import { select, text } from '@storybook/addon-knobs';

import { useChange } from '@/hooks';

import Input from './Input';

export default {
  title: 'Atoms/Input',
  component: Input,
};

export const Default = () => {
  const [value, , onchangeValue] = useChange('');
  const placehoder = text('placehoder', '입력!');
  const type = select('type', ['text', 'password', 'email'], 'text', 'GROUP-ID1');
  return <Input value={value} placeholder={placehoder} onChange={onchangeValue} type={type} />;
};
