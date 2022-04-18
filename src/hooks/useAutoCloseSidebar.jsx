import { useEffect } from 'react';

export const useAutoCloseSidebar = (menuMinScreenWidth, callback) => {
  const handleWindowResize = () => {
    const { innerWidth: windowWidth } = window;
    if (windowWidth <= menuMinScreenWidth) return;
    callback();
  };

  useEffect(() => {
    window.top.addEventListener('resize', handleWindowResize);
    return () => {
      return window.removeEventListener('load', handleWindowResize);
    };
  }, []);
};
