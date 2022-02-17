import React, { useCallback, useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Styled from './styled';
import type { RootState } from '@/reducers';
import { MainContainer, Text, Toggle } from 'components/atoms';
import { Title, Modal, FooterNavbar, ImageList } from '@/components/molecules';
import { useChange, useFileChange, useDisplay } from '@/hooks';
import { updateFeedRequest } from 'action/feedAction';
import { useDispatch, useSelector } from 'react-redux';
import CheckIcon from '@mui/icons-material/Check';
import RegionFeed from '@/components/RegionSearch/RegionFeed';
import WeatherAPI from '@/components/WeatherAPI/WeatherAPI';

const FeedUpdateTemplate: NextPage = () => {
  const dispatch = useDispatch();
  const { feed } = useSelector((state: RootState) => state.feed);

  const [value, setValue, onChange] = useChange(`${feed.content}`);
  const [privateMode, setPrivateMode] = useState(feed.private);
  const [file, setFile] = useFileChange(null);
  const [files, , appendFile] = useFileChange(feed.images);
  const [display, , openDisplay, closeDisplay] = useDisplay(false);
  const [date, setDate] = useState<string | null>(feed.photoDate.slice(0, 10));
  const [region, onRegionChange] = useState('울산광역시 중구 학성동');
  const [temperature, setTemperature, onTemperatureChange] = useChange(`${feed.weather}`);

  const updateFeedAction = (e: React.MouseEvent) => {
    dispatch(
      updateFeedRequest(
        feed.mo,
        value,
        region,
        temperature,
        `${date.slice(0, 4)}.${date.slice(5, 7)}.${date.slice(8)}.${getTime()}`,
        privateMode,
        files,
      ),
    );
  };

  const getTime = () => {
    const today = new Date();
    const hours = ('0' + today.getHours()).slice(-2);
    const minutes = ('0' + today.getMinutes()).slice(-2);
    const datetime = hours + ':' + minutes;
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
        <ImageList selectedFile={file} setFile={setFile} files={files} appendFile={appendFile} />
        <Styled.TextEditor value={value} onChange={onChange} />
        <Styled.InputContainer>
          <Styled.RowContainer>
            <Styled.Input value={date} type="date" onChange={onChangeDate} />
          </Styled.RowContainer>
          <Styled.RowContainer>
            <RegionFeed value={region} onChange={onRegionChange} />
          </Styled.RowContainer>
          <Styled.RowContainer>
            <Styled.Input
              type="number"
              value={temperature}
              onChange={onTemperatureChange}
              placeholder="Temperature..."
            />
            {date && region ? (
              <WeatherAPI
                region={region}
                date={`${date.slice(0, 4)}.${date.slice(5, 7)}.${date.slice(8)}.${getTime()}`}
              />
            ) : null}
          </Styled.RowContainer>
        </Styled.InputContainer>
      </Styled.ContentContainer>
      <FooterNavbar />
      <Modal
        content="사진 어떻게 할꾸냠"
        open={display}
        agreeFunction={() => console.log('히히')}
        disagreeFunction={() => console.log('헤헤')}
      />
    </MainContainer>
  );
};

export default FeedUpdateTemplate;
