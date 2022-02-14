import React, { useState } from 'react';
import Styled from './styled';
import { FooterNavbar, Title } from '@/components/molecules';
import { useChange } from '@/hooks';
import SearchIcon from '@mui/icons-material/Search';

const SearchTemplate = () => {
  const [value, , onChange] = useChange<HTMLInputElement>('');
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
      <Title value="SEARCH" />
      <Styled.ContentContainer>
        <Styled.RowContainer>
          <Styled.Input value={value} onChange={onChange} placeholder="Search..." />
        </Styled.RowContainer>
        <Styled.RowContainer>
          <Styled.Input type="date" onChange={setDate} />~
          <Styled.Input type="date" onChange={setDate} />
        </Styled.RowContainer>
        <Styled.RowContainer>
          <Styled.Input value={region} onChange={onRegionChange} placeholder="Region..." />
        </Styled.RowContainer>
        <Styled.RowContainer>
          <Styled.Input
            type="number"
            value={temperature}
            onChange={onTemperatureChange}
            placeholder="Temperature..."
          />
        </Styled.RowContainer>
        <Styled.RowContainer>
          <Styled.Button onClick={handleSearch}>
            <SearchIcon />
          </Styled.Button>
        </Styled.RowContainer>
      </Styled.ContentContainer>
      <FooterNavbar />
    </Styled.MainContainer>
  );
};

export default SearchTemplate;
