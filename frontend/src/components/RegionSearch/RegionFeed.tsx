import React, { useState, useEffect, FunctionComponent, useCallback } from 'react';
import { apiInstance } from '@/libs/axios';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

// import Chip from '@mui/material/Chip';
// import Stack from '@mui/material/Stack';

interface Props {
  value: any;
  onChange: any;
}

const RegionSearch: FunctionComponent<Props> = ({ value, onChange }) => {
  console.log('나는 벨류', value);
  const api = apiInstance();
  const [regionList, setRegionList] = useState();
  const [interestRegion, setInterestRegion] = useState('지역을 설정해 주세요');

  useEffect(() => {
    const region: Promise<any> = api.get(`/region`).then((res) => setRegionList(res.data));
  }, []);

  const onStateChange = useCallback((event, newValue) => {
    if (newValue) {
      setInterestRegion(newValue);
      onChange(newValue);
    } else {
      setInterestRegion('지역을 설정해 주세요');
    }
  }, []);
  const onInputChange = useCallback(
    (e, newInputValue) => {
      onChange(newInputValue);
    },
    [value],
  );

  return (
    <>
      <Autocomplete
        inputValue={value}
        onChange={onStateChange}
        onInputChange={onInputChange}
        disablePortal
        id="combo-box-demo"
        options={regionList}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Region" />}
      />
      {/* <Stack direction="column" spacing={1}>
        <Stack direction="row" spacing={1}>
          <Chip label={interestRegion} />
        </Stack>
      </Stack> */}
    </>
  );
};

export default RegionSearch;
