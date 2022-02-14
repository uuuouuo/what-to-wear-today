import React, { useCallback, useState } from 'react';

const useFileChange = (
  initalState: File[] | null,
): [
  File[] | null,
  React.Dispatch<React.SetStateAction<File[] | null>>,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  (file: File) => void,
] => {
  const [files, setFile] = useState(initalState);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    setFile([...e.target.files]);
  }, []);

  const appendFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFile([...(files || []), ...e.target.files]);
  }, []);

  const removeFile = useCallback((file: File) => {}, []);

  return [files, setFile, onChange, appendFile, removeFile];
};

export default useFileChange;
