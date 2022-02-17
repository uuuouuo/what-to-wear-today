import React, { useState, FunctionComponent } from 'react';
import Styled from './ImageList.styled';
import { useTheme } from '@mui/material/styles';
import SwipeableViews from 'react-swipeable-views';
import { Image } from '@/components/atoms';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

import { ImageUpload } from '@/components/molecules';
import styled from '@emotion/styled/types/base';

interface Props {
  files: File[] | string[] | null;
  selectedFile: File[] | null;
  setFile: React.Dispatch<React.SetStateAction<File[] | null>>;
  appendFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileList: FunctionComponent<Props> = ({ files, selectedFile, setFile, appendFile }) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };
  return files ? (
    <SwipeableViews
      width={350}
      style={{ zIndex: 100 }}
      axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
      index={activeStep}
      onChangeIndex={handleStepChange}
      enableMouseEvents
    >
      {files.map((file, index) => (
        <Styled.SwipeableItem key={file.name}>
          {Math.abs(activeStep - index) <= 2 ? (
            <Image
              width={350}
              height={255}
              src={typeof file === 'string' ? file : window.URL.createObjectURL(file)}
              alt="upload image"
            />
          ) : null}
        </Styled.SwipeableItem>
      ))}
      <Styled.Container>
        <Styled.ImageUpload onChange={appendFile} multiple>
          <AddCircleOutlineOutlinedIcon sx={{ fontSize: 100 }} />
        </Styled.ImageUpload>
      </Styled.Container>
    </SwipeableViews>
  ) : (
    <Styled.Container>
      <Styled.ImageUpload onChange={appendFile} multiple>
        <AddCircleOutlineOutlinedIcon sx={{ fontSize: 100 }} />
      </Styled.ImageUpload>
    </Styled.Container>
  );
};
export default FileList;
