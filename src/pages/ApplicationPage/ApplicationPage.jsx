import React from 'react';
import { Title, SphereSection, Industry } from '../../components';
import { industryData } from '../../utils/industryData';

import classes from './ApplicationPage.module.css';

export const ApplicationPage = () => {
  return (
    <div className={classes.application}>
      <Title>Применение</Title>
      <section className={classes['sphere-section']}>
        <h4 className={classes['sphere-section__title']}>
          Металлоконструкции DAL HEAVY INDUSTRIES могут быть востребованы с следующих направлениях промышленности:
        </h4>
        <SphereSection textType='full' />
      </section>
      <section className={classes.industries}>
        {industryData.map((item) => (
          <Industry key={item.title} title={item.title} image={item.image} text={item.text} />
        ))}
      </section>
    </div>
  );
};
