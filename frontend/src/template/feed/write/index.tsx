import React, { useCallback, useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Styled from './styled';
import { MainContainer, Text, Toggle } from 'components/atoms';
import { Title, FooterNavbar, ImageList, RegionFeed } from '@/components/molecules';
import { useChange, useFileChange } from '@/hooks';
import { createFeedRequest } from 'action/feedAction';
import { useDispatch } from 'react-redux';
import CheckIcon from '@mui/icons-material/Check';
import weatherAPI from '@/libs/weatherAPI';
import { WeatherType } from '@/types/weather';

const FeedWriteTemplate: NextPage = () => {
  const dispatch = useDispatch();

  const [value, , onChange] = useChange('');
  const [privateMode, setPrivateMode] = useState(false);
  const [files, , , appendFile, removeFile] = useFileChange(null);
  const [date, setDate] = useState<string | null>();
  const [region, setRegion, onRegionChange] = useChange('');
  const [weather, setWeather, onWeatherChange] = useChange('');
  const [tags, , onTagsChange] = useChange('');

  const createFeedAction = (e: React.MouseEvent) => {
    dispatch(createFeedRequest(value, files, date, privateMode, region, tags));
  };

  const onChangeDate = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setDate(
        `${e.target.value.slice(0, 4)}.${e.target.value.slice(5, 7)}.${e.target.value.slice(
          8,
        )}.15:00`,
      );
    },
    [date],
  );

  useEffect(() => {
    if (date && region) {
      weatherAPI(region, date).then((data: WeatherType) =>
        setWeather(`${data.curWeather} ${data.temperatures}`),
      );
    }
  }, [date, region]);
  return (
    <MainContainer>
      <Title value="CREATE" />
      <Styled.ContentContainer>
        <Styled.ButtonContainer>
          <div>
            <Text value="PRIVATE" color="#fff" />
            <Toggle value={privateMode} setValue={setPrivateMode} />
          </div>
          <Styled.Button bgColor="transparent" onClick={createFeedAction}>
            <CheckIcon />
          </Styled.Button>
        </Styled.ButtonContainer>
        <ImageList files={files} appendFile={appendFile} removeFile={removeFile} />
        <Styled.TextEditor value={value} onChange={onChange} />
        <Styled.InputContainer>
          <Styled.RowContainer>
            <Styled.Input type="date" onChange={onChangeDate} />
          </Styled.RowContainer>
          <Styled.RowContainer>
            <RegionFeed onChange={setRegion} />
          </Styled.RowContainer>
          <Styled.RowContainer>
            <Styled.Input value={weather} onChange={onWeatherChange} placeholder="Weather..." />
            {/* {date && region ? <WeatherAPI region={region} date={date} /> : null} */}
          </Styled.RowContainer>
          <Styled.RowContainer>
            <Styled.Input value={tags} onChange={onTagsChange} placeholder="Tags..." />
          </Styled.RowContainer>
        </Styled.InputContainer>
      </Styled.ContentContainer>
      <FooterNavbar />
    </MainContainer>
  );
};

export default FeedWriteTemplate;
