import React, { useState, FunctionComponent } from 'react';
import Styled from './ImageList.styled';
import { useTheme } from '@mui/material/styles';
import SwipeableViews from 'react-swipeable-views';
import { Image } from '@/components/atoms';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

interface Props {
  files: File[] | null;
  appendFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
  removeFile: (file: File) => void;
}

const FileList: FunctionComponent<Props> = ({ files, appendFile, removeFile }) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const removeImage = (file: File) => {
    removeFile(file);
  };

  return (
    <>
      {files ? (
        <SwipeableViews
          style={{
            width: '350px',
            height: '255px',
            zIndex: 100,
            overflow: 'clip',
          }}
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {files.map((file, index) => (
            <Styled.SwipeableItem key={`${file.name}${new Date().getTime()}`}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Image
                  width={350}
                  height={255}
                  src={window.URL.createObjectURL(file)}
                  alt="upload image"
                />
              ) : null}
              <Styled.Button
                onClick={(e: React.MouseEvent) => {
                  removeImage(file);
                }}
              >
                <RemoveCircleIcon />
              </Styled.Button>
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
      )}
    </>
  );
};
export default FileList;
