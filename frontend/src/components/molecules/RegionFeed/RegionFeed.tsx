import React, { useState, useEffect, FunctionComponent, useCallback } from 'react';
import { apiInstance } from '@/libs/axios';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import Styled from './RegionFeed.styled';

interface Props {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const RegionFeed: FunctionComponent<Props> = ({ value, onChange }) => {
  const classes = Styled.useStyles();
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
        onChange={onStateChange}
        onInputChange={onInputChange}
        disablePortal
        id="combo-box-demo"
        options={regionList}
        sx={{ width: 300 }}
        inputValue={value}
        renderInput={(params) => (
          <TextField
            classes={{
              root: classes.root,
            }}
            InputLabelProps={{
              shrink: true,
            }}
            {...params}
            label="Region..."
            variant="standard"
          />
        )}
      />
    </>
  );
};

export default RegionFeed;
