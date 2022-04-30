import React from 'react';
import { useAnimations } from '../../hooks/useAnimations';
import { aboutProjectInfo } from '../../utils/aboutProjectInfo';
import { Panels } from '..';

import 'rsuite/dist/rsuite.min.css';
import './AboutProject.css';

export const AboutProject = () => {
  const articles = aboutProjectInfo;

  useAnimations();

  return (
    <section data-aos='fade-up' className='aboutProject'>
      <h2 className='aboutProject__title'>О проекте</h2>
      <Panels headings={articles} />
    </section>
  );
};
