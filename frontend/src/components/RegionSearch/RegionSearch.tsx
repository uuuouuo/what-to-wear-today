import React, { useState, useEffect, FunctionComponent, useCallback } from 'react';
import { apiInstance, authInstance } from '@/libs/axios';
import Router from 'next/router';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import Styled from './styled';
import { Text, FooterContainer } from '@/components/atoms';

const RegionSearch: FunctionComponent = ({ userId }) => {
  const api = apiInstance();
  const authApi = authInstance();
  const [regionList, setRegionList] = useState();
  const [interestRegion, setInterestRegion] = useState([]);

  useEffect(() => {
    // const region: Promise<any> = api.get(`/region`).then((res) => setRegionList(res.data));
    api.get(`/region`).then((res) => setRegionList(res.data));
  }, []);

  const onChange = (event, value) => {
    if (value && !interestRegion.includes(value)) {
      setInterestRegion([...interestRegion, value]);
    }
  };

  const handleDelete = (event: React.MouseEvent, idx: number) => {
    const newRegionList = interestRegion.filter((el, i) => {
      return idx !== i;
    });
    setInterestRegion(newRegionList);
  };

  const nextFunction = () => {
    // Router.push(`/user/${userId}`);
    // authApi
    //   .put(`/user/region/${userId}`, { region: interestRegion })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
    // authApi.post('/follow', { userId: 'jdb', followingId: 'tmp' });
  };

  return (
    <>
      <Autocomplete
        onChange={onChange}
        disablePortal
        id="combo-box-demo"
        options={regionList}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="지역" />}
      />
      <Stack direction="column" spacing={1}>
        {interestRegion.map((region, idx) => {
          return (
            <Chip
              key={idx}
              label={region}
              variant="outlined"
              onDelete={(e: React.MouseEvent) => handleDelete(e, idx)}
            />
          );
        })}
      </Stack>
      <FooterContainer>
        <Styled.Button bgColor="#fff" onClick={nextFunction}>
          <Text value="SAVE" />
        </Styled.Button>
      </FooterContainer>
    </>
  );
};

export default RegionSearch;
