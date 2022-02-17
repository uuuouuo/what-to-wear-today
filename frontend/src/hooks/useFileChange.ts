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
  const [files, setFile] = useState(initalState === null ? [] : initalState);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    setFile([...Array.from(e.target.files)]);
  }, []);

  const appendFile = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFile([...files, ...Array.from(e.target.files)]);
    },
    [files],
  );

  const removeFile = useCallback((select: File) => {
    // setFile(files.filter((file) => file !== select));
  }, []);

  return [files, setFile, onChange, appendFile, removeFile];
};

export default useFileChange;
