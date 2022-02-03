import React, { FunctionComponent } from 'react';
import { Label, FileInput } from '@/components/atoms';

interface Props {
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children: React.ReactChild;
}

const ImageUpload: FunctionComponent<Props> = ({ className, onChange, children }) => {
  return (
    <Label className={className}>
      {children}
      <FileInput accept="image/*" onChange={onChange} />
    </Label>
  );
};

export default ImageUpload;
