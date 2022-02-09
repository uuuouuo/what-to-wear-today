import React, { useState } from 'react';
import Styled from './styled';
import { Title } from '@/components/molecules';
import { Button } from 'components/atoms';
import { useChange } from '@/hooks';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  const [value, setValue, onChange] = useChange<HTMLInputElement>('');

  const handleSearch = () => {};

  return (
    <Styled.MainContainer>
      <Title value="Search" />
      <Styled.contentContainer>
        <Styled.rowContainer>
          <Styled.Input value={value} onChange={onChange} placeholder="Search..."></Styled.Input>
          <Button onClick={handleSearch}>
            <SearchIcon />
          </Button>
        </Styled.rowContainer>
      </Styled.contentContainer>
    </Styled.MainContainer>
  );
};

export default Search;
