import React, { useCallback, useState } from 'react';
// @ts-ignore
import _ from 'lodash';

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

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    // setFile([_.spread((e.target as HTMLInputElement).files]));
  }, []);

  const appendFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    // setFile([...(files || []), ..(.e.target as HTMLInputElement).files]);
  }, []);

  const removeFile = useCallback((file: File) => {}, []);

  return [files, setFile, onChange, appendFile, removeFile];
};

export default useFileChange;
