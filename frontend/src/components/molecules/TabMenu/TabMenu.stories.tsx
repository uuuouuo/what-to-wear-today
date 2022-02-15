import React, { useState } from 'react';

import TabMenu from './TabMenu';

export default {
  title: 'Molecules/TabMenu',
  component: TabMenu,
};

export const Default = () => {
  const [value, setValue] = useState(0);
  return <TabMenu tabList={['최신순', '추천순', '인기순']} value={value} setValue={setValue} />;
};
