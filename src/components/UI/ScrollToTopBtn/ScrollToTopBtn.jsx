import React, { useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaArrowCircleUp } from 'react-icons/fa';

import classes from './ScrollToTopBtn.module.css';
import { useScrollBtn } from '../../../hooks/useScollBtn';
import { useScroll } from '../../../hooks/useScroll';

export const ScrollToTopBtn = () => {
  const [btnClass, setBtnClass] = useState('');
  const [windowOffSet, setWindowOffSet] = useState(window.pageYOffset);
  const offSet = 200;

  useScroll(setWindowOffSet);
  useScrollBtn(windowOffSet, offSet, setBtnClass);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <button className={`${classes.btn} ${classes[btnClass]}`} onClick={scrollToTop} type='button'>
      <FaArrowCircleUp />
    </button>
  );
};
