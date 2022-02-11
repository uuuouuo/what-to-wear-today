import React, { useState, FunctionComponent } from 'react';
import { useTheme } from '@mui/material/styles';
import SwipeableViews from 'react-swipeable-views';
import { Image } from '@/components/atoms';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

import { ImageUpload } from '@/components/molecules';

interface Props {
  files: File[] | null;
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

  return (
    <SwipeableViews
      axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
      index={activeStep}
      onChangeIndex={handleStepChange}
      enableMouseEvents
    >
      {files?.map((file, index) => (
        <div key={file.name}>
          {Math.abs(activeStep - index) <= 2 ? (
            <Image src={window.URL.createObjectURL(file)} alt="upload image" />
          ) : null}
        </div>
      ))}
      <ImageUpload onChange={appendFile} multiple>
        <AddCircleOutlineOutlinedIcon sx={{ fontSize: 100 }} />
      </ImageUpload>
    </SwipeableViews>
  );
};
export default FileList;
