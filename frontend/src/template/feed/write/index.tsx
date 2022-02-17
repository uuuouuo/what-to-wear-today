import React, { useState } from 'react';
import type { NextPage } from 'next';
import Styled from './styled';
import { MainContainer, Text, Toggle } from 'components/atoms';
import { Title, Modal, FooterNavbar, ImageList } from '@/components/molecules';
import { useChange, useFileChange, useDisplay } from '@/hooks';
import { createFeedRequest } from 'action/feedAction';
import { useDispatch } from 'react-redux';
import CheckIcon from '@mui/icons-material/Check';
import RegionFeed from '@/components/RegionSearch/RegionFeed';
import WeatherAPI from '@/components/WeatherAPI/WeatherAPI';
import Router from 'next/router';

const FeedWriteTemplate: NextPage = () => {
  const dispatch = useDispatch();

  const [value, setValue, onChange] = useChange(``);
  const [privateMode, setPrivateMode] = useState(false);
  const [file, setFile] = useFileChange(null);
  const [files, , , appendFile] = useFileChange(null);
  const [display, , openDisplay, closeDisplay] = useDisplay(false);
  const [date, setDate] = useState<string | null>();
  const [region, onRegionChange] = useState();
  const [temperature, , onTemperatureChange] = useChange('');

  const getTime = () => {
    const today = new Date();
    const hours = ('0' + today.getHours()).slice(-2);
    const minutes = ('0' + today.getMinutes()).slice(-2);
    const datetime = hours + ':' + minutes;
    return datetime;
  };

  const createFeedAction = (e: React.MouseEvent) => {
    e.preventDefault();
    Router.back();
    dispatch(
      createFeedRequest(
        value,
        region,
        temperature,
        privateMode,
        `${date.slice(0, 4)}.${date.slice(5, 7)}.${date.slice(8)}.${getTime()}`,
        files,
      ),
    );
  };

  const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  return (
    <MainContainer>
      <Title value="CREATE" />
      <Styled.ContentContainer>
        <Styled.ButtonContainer>
          <>
            <Text value="PRIVATE" color="#fff" />
            <Toggle value={privateMode} setValue={setPrivateMode} />
          </>
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

export default FeedWriteTemplate;
