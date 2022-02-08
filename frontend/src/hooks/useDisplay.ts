import React, { useCallback, useState } from 'react';

const useDisplay = (
  initalState: boolean,
): [boolean, React.Dispatch<React.SetStateAction<boolean>>, () => void, () => void] => {
  const [display, setDisplay] = useState(initalState);

  const openDisplay = useCallback(() => {
    setDisplay(true);
  }, []);

  const closeDisplay = useCallback(() => {
    setDisplay(false);
  }, []);

  return [display, setDisplay, openDisplay, closeDisplay];
};

export default useDisplay;
