import React from 'react';
import { Title, SphereSection } from '../../components';

import classes from './ApplicationPage.module.css';

export const ApplicationPage = () => {
  return (
    <div className='application'>
      <Title>Применение</Title>
      <section className={classes['sphere-section']}>
        <h4 className={classes['sphere-section__title']}>
          Металлоконструкции DAL HEAVY INDUSTRIES могут быть востребованы с следующих направлениях промышленности:
        </h4>
        <SphereSection textType='full' />
      </section>
    </div>
  );
};
