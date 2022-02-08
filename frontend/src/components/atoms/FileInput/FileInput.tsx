import React, { FunctionComponent } from 'react';
import Styled from './FileInput.styled';

interface Props {
  className?: string;
  accept?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileInput: FunctionComponent<Props> = ({ className, accept, onChange }) => {
  return <Styled.FileInput className={className} type="file" accept={accept} onChange={onChange} />;
};

export default FileInput;
