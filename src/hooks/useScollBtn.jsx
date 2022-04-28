import { useMemo, useEffect, useLayoutEffect } from 'react';

export const useScrollBtn = (windowOffSet, offSet, setClass, setWindowOffSet) => {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setWindowOffSet(window.pageYOffset);
    });
  }, []);

  useLayoutEffect(() => {
    window.removeEventListener('scroll', () => {
      setWindowOffSet(window.pageYOffset);
    });
  }, []);
  useMemo(() => {
    if (windowOffSet < offSet) {
      setClass('deactivate');
    } else {
      setClass('activate');
    }
  }, [windowOffSet]);
};
