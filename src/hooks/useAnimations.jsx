import { useEffect } from 'react';
import AOS from 'aos';

export const useAnimations = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);
};
