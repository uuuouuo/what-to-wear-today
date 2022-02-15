import React, { useState } from 'react';
import type { NextPage } from 'next';
import Router from 'next/router';
import Styled from './styled';

import { MainContainer, Text, Toggle } from 'components/atoms';
import { Title, Modal, FooterNavbar, ImageList } from '@/components/molecules';
import { useChange, useFileChange, useDisplay } from '@/hooks';
import { createFeedRequest } from 'action/feedAction';
import { useDispatch } from 'react-redux';

import CheckIcon from '@mui/icons-material/Check';

const FeedWriteTemplate: NextPage = () => {
  const dispatch = useDispatch();
  const [value, , onChange] = useChange('');
  const [privateMode, setPrivateMode] = useState(false);
  const [file, setFile] = useFileChange(null);
  const [files, , , appendFile] = useFileChange(null);
  const [display, , openDisplay, closeDisplay] = useDisplay(false);
  const [date, , onChangeDate] = useChange('');
  const [region, , onRegionChange] = useChange('');
  const [temperature, , onTemperatureChange] = useChange('');

  const createFeedAction = (e: React.MouseEvent) => {
    dispatch(createFeedRequest(value, files, date, privateMode, region, temperature));
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
            <Styled.Input value={region} onChange={onRegionChange} placeholder="Region..." />
          </Styled.RowContainer>
          <Styled.RowContainer>
            <Styled.Input
              type="number"
              value={temperature}
              onChange={onTemperatureChange}
              placeholder="Temperature..."
            />
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
