import React from 'react';
import { select, text } from '@storybook/addon-knobs';
import PersonIcon from '@mui/icons-material/Person';

import useChange from '@/hooks/useChange';

import FormGroup from './FormGroup';
import Text from '@/components/atoms/Text/Text';

export default {
  title: 'Atoms/FormGroup',
  component: FormGroup,
};

export const Defalut = () => {
  const [value, , onchangeValue] = useChange('');
  const type = select('type', ['text', 'password', 'email'], 'text', 'GROUP-ID1');
  return (
    <FormGroup placeholder="nickname" value={value} onChange={onchangeValue} type={type}>
      <PersonIcon />
    </FormGroup>
  );
};

export const TextLabel = () => {
  const [value, , onchangeValue] = useChange('');
  const type = select('type', ['text', 'password', 'email'], 'text', 'GROUP-ID1');
  return (
    <FormGroup value={value} onChange={onchangeValue} type={type}>
      <Text value="nickname" />
    </FormGroup>
  );
};
