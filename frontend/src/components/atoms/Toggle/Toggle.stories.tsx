import React, { useState } from 'react';

import Toggle from './Toggle';

export default {
  title: 'Atoms/Toggle',
  component: Toggle,
};

export const Default = () => {
  const [value, setValue] = useState(false);
  return <Toggle value={value} setValue={setValue} />;
};
