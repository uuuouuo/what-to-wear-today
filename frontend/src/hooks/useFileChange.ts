import React, { useCallback, useState } from 'react';

const useFileChange = <T extends { files: FileList }>(
  initalState: File[] | null,
): [
  File[] | null,
  React.Dispatch<React.SetStateAction<File[] | null>>,
  (e: React.ChangeEvent) => void,
  (e: React.ChangeEvent) => void,
] => {
  const [files, setFile] = useState(initalState);
  const onChange = useCallback(
    (e: React.ChangeEvent) => {
      setFile([...e.target.files]);
    },
    [files],
  );

  const appendFile = useCallback(
    (e: React.ChangeEvent) => {
      setFile([...(files || []), ...e.target.files]);
    },
    [files],
  );

  const removeFile = useCallback((file: File) => {}, []);

  return [files, setFile, onChange, appendFile];
};

export default useFileChange;
