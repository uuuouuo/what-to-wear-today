import React, { useState } from 'react';
import Styled from './styled';
import { Title } from '@/components/molecules';

const Search = () => {
  return (
    <Styled.MainContainer>
      <Title value="Search" />
    </Styled.MainContainer>
  );
};

export default Search;
