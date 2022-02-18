import React, { useState } from 'react';
import type { NextPage } from 'next';
import Styled from './styled';
import { Title, RegionSearch } from '@/components/molecules';

const RegionTemplate: NextPage = () => {
  return (
    <Styled.MainContainer>
      <Title value="관심 지역 설정" />
      <Styled.SearchContainer>
        <RegionSearch />
      </Styled.SearchContainer>
    </Styled.MainContainer>
  );
};

export default RegionTemplate;
