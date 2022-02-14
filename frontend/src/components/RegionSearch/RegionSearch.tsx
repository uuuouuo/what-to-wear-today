import React, { useState, useEffect, FunctionComponent } from 'react';
import { apiInstance } from '@/libs/axios';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const RegionSearch: FunctionComponent = () => {
  const [regionList, setRegionList] = useState();
  const api = apiInstance();
  useEffect(() => {
    const region: Promise<any> = api.get(`/region`).then((res) => setRegionList(res.data));
  }, []);

  return (
    <Autocomplete
      onChange={(event, value) => console.log(value)}
      disablePortal
      id="combo-box-demo"
      options={regionList}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="지역" />}
    />
  );
};

export default RegionSearch;
