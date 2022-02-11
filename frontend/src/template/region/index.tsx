import React, { useState } from 'react';
import type { NextPage } from 'next';
import Styled from './styled';
import { useRouter } from 'next/router';
import { Title } from '@/components/molecules';
import { useChange } from '@/hooks';
import { Text, Button } from '@/components/atoms';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const SetRegion: NextPage = () => {
  const router = useRouter();
  const { index } = router.query;
  const [value, setValue, onChange] = useChange<HTMLInputElement>('');
  const [regionList, setRegionList] = useState([]);

  const handleDelete = (event: React.MouseEvent, idx: number) => {
    const newRegionList = regionList.filter((el, i) => {
      return idx !== i;
    });
    setRegionList(newRegionList);
  };

  const addRegion = () => {
    if (value.trim()) {
      setRegionList([...regionList, value]);
    }
    setValue('');
  };

  const deleteRegion = () => {};
  return (
    <Styled.MainContainer>
      <Title value="지역 설정" />
      <Styled.SearchContainer>
        <Styled.FormGroup label={'지역명'} value={value} onChange={onChange}></Styled.FormGroup>
        <Styled.Button onClick={addRegion}>
          <Text value="+" />
        </Styled.Button>
      </Styled.SearchContainer>
      <Styled.columnContainer>
        <Stack direction="column" spacing={1}>
          {regionList.map((region, idx) => {
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
      </Styled.columnContainer>
    </Styled.MainContainer>
  );
};

export default SetRegion;
