import React, { FunctionComponent } from 'react';
import Styled from './FileInput.styled';

interface Props {
  className?: string;
  accept?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  multiple?: boolean;
}

const FileInput: FunctionComponent<Props> = ({ className, accept, onChange, multiple = false }) => {
  return (
    <Styled.FileInput
      className={className}
      type="file"
      accept={accept}
      onChange={onChange}
      multiple={multiple}
    />
  );
};

export default FileInput;
