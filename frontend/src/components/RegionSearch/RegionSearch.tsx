import React, { useState, useEffect, FunctionComponent, useCallback } from 'react';
import { apiInstance, authInstance } from '@/libs/axios';
import Router from 'next/router';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import Styled from './styled';
import { Text, FooterContainer } from '@/components/atoms';

interface Props {
  userId: string;
}

const RegionSearch: FunctionComponent<Props> = ({ userId }) => {
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
    authApi.put(`/user/region/${userId}`, { regions: interestRegion }).then((res) => {
      Router.push(`/user/${userId}`);
    });
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
              key={region}
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
