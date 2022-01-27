import React from 'react';
import PersonIcon from '@mui/icons-material/Person';

import Label from './Label';

export default {
  title: 'Atoms/Label',
  component: Label,
};

export const Default = () => {
  return (
    <Label>
      <PersonIcon />
    </Label>
  );
};
