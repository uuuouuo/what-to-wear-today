import React, { FunctionComponent } from 'react';
import { Label, FileInput } from '@/components/atoms';

interface Props {
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children: React.ReactChild;
  multiple?: boolean;
}

const ImageUpload: FunctionComponent<Props> = ({
  className,
  onChange,
  children,
  multiple = false,
}) => {
  return (
    <Label className={className}>
      {children}
      <FileInput accept="image/*" onChange={onChange} multiple={multiple} />
    </Label>
  );
};

export default ImageUpload;
