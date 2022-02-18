import React from 'react';
import Avatar from '@mui/material/Avatar';

import { useDisplay } from '@/hooks';

import Modal from './Modal';

export default {
  title: 'Molecules/Modal',
  component: Modal,
};

export const Default = () => {
  const [open, , agreeFunction, disagreeFunction] = useDisplay(true);

  return (
    <Modal
      open={open}
      content="안농~~~~~"
      agreeFunction={agreeFunction}
      disagreeFunction={disagreeFunction}
    />
  );
};
