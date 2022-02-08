import React, { useCallback, useState } from 'react';

const useFileChange = <T extends { files: FileList | null }>(
  initalState: FileList | null,
): [
  FileList | null,
  React.Dispatch<React.SetStateAction<FileList | null>>,
  (e: React.ChangeEvent<T>) => void,
] => {
  const [files, setValue] = useState(initalState);
  const onChange = useCallback((e: React.ChangeEvent<T>) => {
    setValue(e.target.files);
  }, []);

  return [files, setValue, onChange];
};

export default useFileChange;
