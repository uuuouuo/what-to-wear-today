import React from 'react';

import SuccessBadge from './SuccessBadge';

export default {
  title: 'Molecules/SuccessBadge',
  component: SuccessBadge,
};

export const Default = () => {
  return (
    <div style={{ position: 'relative' }}>
      <SuccessBadge />
    </div>
  );
};
