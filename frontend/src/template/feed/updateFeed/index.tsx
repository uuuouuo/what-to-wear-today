import React, { useState } from 'react';
import type { NextPage } from 'next';
import Styled from './styled';
import type { RootState } from '@/reducers';
import { MainContainer, Text, Toggle } from 'components/atoms';
import { Title, Modal, FooterNavbar, ImageList } from '@/components/molecules';
import { useChange, useFileChange, useDisplay } from '@/hooks';
import { createFeedRequest } from 'action/feedAction';
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
  const [files, , , appendFile] = useFileChange(null);
  const [display, , openDisplay, closeDisplay] = useDisplay(false);
  const [date, setDate] = useState<string | null>();
  const [region, onRegionChange] = useState(feed.region);
  const [temperature, , onTemperatureChange] = useChange(`${feed.weather}`);

  const createFeedAction = (e: React.MouseEvent) => {
    dispatch(createFeedRequest(value, files, date, privateMode, region, temperature));
  };

  const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(
      `${feed.photoDate.slice(0, 4)}.${feed.photoDate.slice(5, 7)}.${feed.photoDate.slice(
        8,
      )}.15:00`,
    );
  };

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
        <ImageList selectedFile={file} setFile={setFile} files={files} appendFile={appendFile} />
        <Styled.TextEditor value={value} onChange={onChange} />
        <Styled.InputContainer>
          <Styled.RowContainer>
            <Styled.Input type="date" onChange={onChangeDate} />
          </Styled.RowContainer>
          <Styled.RowContainer>
            <RegionFeed onChange={onRegionChange} />
          </Styled.RowContainer>
          <Styled.RowContainer>
            <Styled.Input
              type="number"
              value={temperature}
              onChange={onTemperatureChange}
              placeholder="Temperature..."
            />
            {date && region ? <WeatherAPI region={region} date={date} /> : null}
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
