import React from 'react';
import type { NextPage } from 'next';
import Router from 'next/router';
import Styled from './styled';

import { Button, Text, MainContainer, FooterContainer } from 'components/atoms';
import { Title, Modal } from '@/components/molecules';
import { useChange, useFileChange, useDisplay } from '@/hooks';

const FeedWrite: NextPage = () => {
  const [value, , onChange] = useChange('');
  const [file, setFile] = useFileChange(null);
  const [files, , , appendFile] = useFileChange(null);
  const [display, , openDisplay, closeDisplay] = useDisplay(false);

  const onClick = (e: React.MouseEvent) => {
    console.log('홈');
  };

  return (
    <MainContainer>
      <Title value="CREATE" />
      <Styled.ContentContainer>
        <Styled.ImageList
          selectedFile={file}
          setFile={setFile}
          files={files}
          appendFile={appendFile}
        />
        <Styled.TextEditor value={value} onChange={onChange} />
      </Styled.ContentContainer>
      <FooterContainer>
        <Button onClick={onClick}>
          <Text value="홈" />
        </Button>
      </FooterContainer>
      <Modal
        content="사진 어떻게 할꾸냠"
        open={display}
        agreeFunction={() => console.log('히히')}
        disagreeFunction={() => console.log('헤헤')}
      />
    </MainContainer>
  );
};

export default FeedWrite;
