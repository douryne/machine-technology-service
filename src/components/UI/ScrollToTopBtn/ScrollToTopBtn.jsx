import React, { useEffect, useState, useMemo } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaArrowCircleUp } from 'react-icons/fa';

import classes from './ScrollToTopBtn.module.css';

export const ScrollToTopBtn = () => {
  const [btnClass, setBtnClass] = useState('');
  const [windowOffSet, setWindowOffSet] = useState(window.pageYOffset);
  const offSet = 200;

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setWindowOffSet(window.pageYOffset);
    });
  }, []);

  useMemo(() => {
    if (windowOffSet < offSet) {
      setBtnClass('deactivate');
    } else {
      setBtnClass('activate');
    }
  }, [windowOffSet]);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <button className={`${classes.btn} ${classes[btnClass]}`} onClick={scrollToTop} type='button'>
      <FaArrowCircleUp />
    </button>
  );
};
