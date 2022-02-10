import React, { FunctionComponent } from 'react';
import Styled from './ImageList.styled';

import { Image } from '@/components/atoms';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

import { ImageUpload } from '@/components/molecules';

interface Props {
  className?: string;
  files: File[] | null;
  selectedFile: File[] | null;
  setFile: React.Dispatch<React.SetStateAction<File[] | null>>;
  appendFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileList: FunctionComponent<Props> = ({
  className,
  files,
  selectedFile,
  setFile,
  appendFile,
}) => {
  const handleImage = (e: React.MouseEvent<HTMLInputElement>) => {
    const idx: number = 0;
    if (files && files[idx]) {
      setFile([files[idx]]);
    }
  };

  return (
    <Styled.ImageList className={className}>
      {files?.map((file: File, idx: number) => (
        <Styled.ImageContainer data-idx={idx} onClick={handleImage}>
          <Image src={window.URL.createObjectURL(file)} />
        </Styled.ImageContainer>
      ))}
      <Styled.ImageContainer>
        <ImageUpload onChange={appendFile} multiple={true}>
          <AddCircleOutlineOutlinedIcon sx={{ fontSize: 100 }} />
        </ImageUpload>
      </Styled.ImageContainer>
    </Styled.ImageList>
  );
};
export default FileList;
