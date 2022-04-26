import React from 'react';
import { PageTitle, SpheresAppVer, Industry, GreyHeader } from '../../components';
import { industryData } from '../../utils/industryData';

import classes from './ApplicationPage.module.css';

export const ApplicationPage = () => {
  return (
    <div className={classes.application}>
      <PageTitle>Применение</PageTitle>
      <section className={classes['sphere-section']}>
        <div className={classes['sphere-section__title']}>
          <GreyHeader importance={4}>
            Металлоконструкции DAL HEAVY INDUSTRIES могут быть востребованы с следующих направлениях промышленности:
          </GreyHeader>
        </div>
        <SpheresAppVer />
      </section>
      <section className={classes.industries}>
        {industryData.map((item) => (
          <Industry key={item.title} title={item.title} image={item.image} text={item.text} />
        ))}
      </section>
    </div>
  );
};
