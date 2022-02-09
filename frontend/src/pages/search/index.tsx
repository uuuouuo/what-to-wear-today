import React, { useState } from 'react';
import Styled from './styled';
import { Title } from '@/components/molecules';
import { Button } from 'components/atoms';
import { useChange } from '@/hooks';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  const [value, setValue, onChange] = useChange<HTMLInputElement>('');
  const [startDate, setStartDate] = useState<Date | null>();
  const [endDate, setEndDate] = useState<Date | null>();
  const [region, setRegion] = useState('');
  const [temperature, setTemperature] = useState<number | null>(null);

  const handleSearch = () => {};

  const setDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'start') {
      setStartDate(event.target.valueAsDate);
    } else if (event.target.name === 'end') {
      setEndDate(event.target.valueAsDate);
    }
  };
  const onRegionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegion(event.target.value);
  };
  const onTemperatureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTemperature(event.target.valueAsNumber);
  };

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
        <Styled.rowContainer>
          기간 <input type="date" name="start" onChange={setDate}></input> ~{' '}
          <input type="date" name="end" onChange={setDate}></input>
        </Styled.rowContainer>
        <Styled.rowContainer>
          지역 <input type="text" name="region" onChange={onRegionChange}></input>
        </Styled.rowContainer>
        <Styled.rowContainer>
          온도 <input type="number" name="regionStart" onChange={onTemperatureChange}></input>
        </Styled.rowContainer>
      </Styled.contentContainer>
    </Styled.MainContainer>
  );
};

export default Search;
