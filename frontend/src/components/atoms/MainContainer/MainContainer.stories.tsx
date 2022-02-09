import React from 'react';

import MainContainer from './MainContainer';

export default {
  title: 'Atoms/MainContainer',
  component: MainContainer,
};

export const Default = () => {
  return (
    <MainContainer>
      <span>하윙!</span>
    </MainContainer>
  );
};
