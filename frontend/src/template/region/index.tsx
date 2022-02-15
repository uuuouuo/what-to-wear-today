import React, { useState } from 'react';
import type { NextPage } from 'next';
import Styled from './styled';
import { Title } from '@/components/molecules';

import RegionSearch from '@/components/RegionSearch/RegionSearch';

const RegionTemplate: NextPage = ({ userId }) => {
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
