import { useMemo } from 'react';

export const useScrollBtn = (windowOffSet, offSet, setFn) => {
  useMemo(() => {
    if (windowOffSet < offSet) {
      setFn('deactivate');
    } else {
      setFn('activate');
    }
  }, [windowOffSet]);
};
