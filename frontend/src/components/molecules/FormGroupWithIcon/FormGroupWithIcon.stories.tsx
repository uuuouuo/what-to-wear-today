import React from 'react';
import { select } from '@storybook/addon-knobs';
import PersonIcon from '@mui/icons-material/Person';

import { useChange } from '@/hooks';

import FormGroupWithIcon from './FormGroupWithIcon';

export default {
  title: 'Molecules/FormGroupWithIcon',
  component: FormGroupWithIcon,
};

export const Defalut = () => {
  const [value, , onchangeValue] = useChange('');
  const type = select('type', ['text', 'password', 'email'], 'text', 'GROUP-ID1');
  return (
    <FormGroupWithIcon placeholder="nickname" value={value} onChange={onchangeValue} type={type}>
      <PersonIcon />
    </FormGroupWithIcon>
  );
};
