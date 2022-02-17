import React, { useState } from 'react';
import Styled from './styled';
import { FooterNavbar, Title, RegionFeed } from '@/components/molecules';
import { useChange } from '@/hooks';
import SearchIcon from '@mui/icons-material/Search';
import { apiInstance } from 'libs/axios';

import Router from 'next/router';

const SearchTemplate = () => {
  const [value, , onChange] = useChange<HTMLInputElement>('');
  const [startDate, setStartDate] = useState<Date | null>();
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [region, setRegion] = useState('');
  const [temperature, setTemperature] = useState<number | null>(null);

  const setDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.className.includes('start')) {
      setStartDate(event.target.valueAsDate);
    } else if (event.target.className.includes('end')) {
      setEndDate(event.target.valueAsDate);
    }
  };
  // const onRegionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setRegion(event.target.value);
  // };
  const onTemperatureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTemperature(event.target.valueAsNumber);
  };

  const api = apiInstance();
  const handleSearch = () => {
    const tags = Array<string>();
    value.split(/(#[^#\s]+|\n)/g).map((v) => {
      if (v.match(/(#[^#\s]+)/)) {
        tags.push(v);
      }
    });
    const proTags = tags.map((tag) => tag.slice(1));
    let uri = '/feed?';
    if (proTags.length > 0) {
      uri += `tag=${proTags.join(',')}`;
    }
    if (startDate) {
      uri += `&startDate=${startDate.getFullYear()}.${
        startDate.getMonth() + 1
      }.${startDate.getDate()}`;
    }
    uri += `&endDate=${endDate.getFullYear()}.${endDate.getMonth() + 1}.${endDate.getDate()}`;
    if (region) {
      uri += `&region=${region}`;
    }
    if (temperature) {
      uri += `&temperature=${temperature}`;
    }
    // console.log(uri);
    // api.get(uri).then((res) => console.log(res.data.content));
    Router.push(`/search${uri}`);
  };

  return (
    <Styled.MainContainer>
      <Title value="SEARCH" />
      <Styled.ContentContainer>
        <Styled.RowContainer>
          <Styled.Input value={value} onChange={onChange} placeholder="Search..." />
        </Styled.RowContainer>
        <Styled.RowContainer>
          <Styled.Input type="date" className="start" onChange={setDate} />~
          <Styled.Input type="date" className="end" onChange={setDate} />
        </Styled.RowContainer>
        <Styled.RowContainer>
          {/* <Styled.Input value={region} onChange={onRegionChange} placeholder="Region..." /> */}
          <RegionFeed value={region} onChange={setRegion} />
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
