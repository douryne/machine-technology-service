import { useEffect, useLayoutEffect } from 'react';

export const useScroll = (setFn) => {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setFn(window.pageYOffset);
    });
  }, []);

  useLayoutEffect(() => {
    window.removeEventListener('scroll', () => {
      setFn(window.pageYOffset);
    });
  }, []);
};
