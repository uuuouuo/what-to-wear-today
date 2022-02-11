import React, { useCallback, useState } from 'react';

const useCheck = <T extends { checked: boolean; value: string }>(
  initalState: string[],
): [
  string[],
  React.Dispatch<React.SetStateAction<string[]>>,
  (e: React.ChangeEvent<T>) => void,
] => {
  const [values, setValues] = useState(initalState);

  const onChange = useCallback(
    (e: React.ChangeEvent<T>) => {
      if (e.target.checked) setValues([...values, e.target.value]);
      else setValues(values.filter((value) => value !== e.target.value));
    },
    [values],
  );

  return [values, setValues, onChange];
};

export default useCheck;
