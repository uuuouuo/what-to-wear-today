import React, { useState, useEffect, FunctionComponent } from 'react';
import { apiInstance } from '@/libs/axios';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import Styled from './RegionFeed.styled';

interface Props {
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const RegionFeed: FunctionComponent<Props> = ({ onChange }) => {
  const classes = Styled.useStyles();
  const api = apiInstance();
  const [regionList, setRegionList] = useState();
  const [interestRegion, setInterestRegion] = useState('지역을 설정해 주세요');

  useEffect(() => {
    const region: Promise<any> = api.get(`/region`).then((res) => setRegionList(res.data));
  }, []);

  const onStateChange = (event, value) => {
    if (value) {
      setInterestRegion(value);
      onChange(value);
    } else {
      setInterestRegion('지역을 설정해 주세요');
    }
  };

  return (
    <>
      <Autocomplete
        onChange={onStateChange}
        disablePortal
        id="combo-box-demo"
        options={regionList}
        sx={{ width: 300 }}
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
      {/* <Stack direction="column" spacing={1}>
        <Stack direction="row" spacing={1}>
          <Chip label={interestRegion} />
        </Stack>
      </Stack> */}
    </>
  );
};

export default RegionFeed;
