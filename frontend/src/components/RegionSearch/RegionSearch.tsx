import React, { useState, useEffect, FunctionComponent } from 'react';
import { apiInstance } from '@/libs/axios';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const RegionSearch: FunctionComponent = () => {
  const api = apiInstance();
  const [regionList, setRegionList] = useState();
  const [interestRegion, setInterestRegion] = useState([]);

  useEffect(() => {
    const region: Promise<any> = api.get(`/region`).then((res) => setRegionList(res.data));
  }, []);

  const onChange = (event, value) => {
    if (value) {
      setInterestRegion([...interestRegion, value]);
    }
  };

  const handleDelete = (event: React.MouseEvent, idx: number) => {
    const newRegionList = interestRegion.filter((el, i) => {
      return idx !== i;
    });
    setInterestRegion(newRegionList);
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
    </>
  );
};

export default RegionSearch;
