import React, { useCallback, useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Styled from './styled';
import type { RootState } from '@/reducers';
import { MainContainer, Text, Toggle } from 'components/atoms';
import { Title, Modal, FooterNavbar, ImageList, RegionFeed } from '@/components/molecules';
import { useChange, useFileChange, useDisplay } from '@/hooks';
import { updateFeedRequest } from 'action/feedAction';
import { useDispatch, useSelector } from 'react-redux';
import CheckIcon from '@mui/icons-material/Check';
import weatherAPI from '@/libs/weatherAPI';
import { WeatherType } from '@/types/weather';

const FeedUpdateTemplate: NextPage = () => {
  const dispatch = useDispatch();
  const { feed } = useSelector((state: RootState) => state.feed);

  const [value, setValue, onChange] = useChange(`${feed.content}`);
  const [privateMode, setPrivateMode] = useState(feed.private);
  const [files, , , appendFile, removeFile] = useFileChange(null);
  const [date, setDate] = useState<string | null>(feed.photoDate.slice(0, 10));
  const [region, onRegionChange] = useState('울산광역시 중구 학성동');
  const [weather, setWeather, onWeatherChange] = useChange('');

  const updateFeedAction = (e: React.MouseEvent) => {
    dispatch(
      updateFeedRequest(
        feed.no,
        value,
        region,
        weather,
        `${date.slice(0, 4)}.${date.slice(5, 7)}.${date.slice(8)}.${getTime()}`,
        privateMode,
        files,
      ),
    );
  };

  useEffect(() => {
    if (date && region) {
      weatherAPI(
        region,
        `${date.slice(0, 4)}.${date.slice(5, 7)}.${date.slice(8)}.${getTime()}`,
      ).then((data: WeatherType) => setWeather(`${data.curWeather} ${data.temperatures}`));
    }
  }, [date, region]);

  const getTime = () => {
    const today = new Date();
    const hours = `0${today.getHours()}`.slice(-2);
    const minutes = `0${today.getMinutes()}`.slice(-2);
    const datetime = `${hours}:${minutes}`;
    return datetime;
  };

  const onChangeDate = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setDate(e.target.value);
    },
    [date],
  );

  return (
    <MainContainer>
      <Title value="UPDATE" />
      <Styled.ContentContainer>
        <Styled.ButtonContainer>
          <div>
            <Text value="PRIVATE" color="#fff" />
            <Toggle value={privateMode} setValue={setPrivateMode} />
          </div>
          <Styled.Button bgColor="transparent" onClick={updateFeedAction}>
            <CheckIcon />
          </Styled.Button>
        </Styled.ButtonContainer>
        <ImageList files={files} appendFile={appendFile} removeFile={removeFile} />
        <Styled.TextEditor value={value} onChange={onChange} />
        <Styled.InputContainer>
          <Styled.RowContainer>
            <Styled.Input value={date} type="date" onChange={onChangeDate} />
          </Styled.RowContainer>
          <Styled.RowContainer>
            <RegionFeed value={region} onChange={onRegionChange} />
          </Styled.RowContainer>
          <Styled.RowContainer>
            <Styled.Input value={weather} onChange={onWeatherChange} placeholder="Weather..." />
            {/* {date && region ? (
              <WeatherAPI
                region={region}
                date={`${date.slice(0, 4)}.${date.slice(5, 7)}.${date.slice(8)}.${getTime()}`}
              />
            ) : null} */}
          </Styled.RowContainer>
        </Styled.InputContainer>
      </Styled.ContentContainer>
      <FooterNavbar />
    </MainContainer>
  );
};

export default FeedUpdateTemplate;
