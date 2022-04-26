import React from 'react';
import { PageTitle, SpheresAppVer, IndustriesList, GreyTitle } from '../../components';

import classes from './ApplicationPage.module.css';

export const ApplicationPage = () => {
  return (
    <div className={classes.application}>
      <PageTitle>Применение</PageTitle>
      <section className={classes['sphere-section']}>
        <div className={classes['sphere-section__title']}>
          <GreyTitle importance={3}>
            Металлоконструкции DAL HEAVY INDUSTRIES могут быть востребованы с следующих направлениях промышленности:
          </GreyTitle>
        </div>
        <SpheresAppVer />
      </section>
      <section className={classes.industries}>
        <IndustriesList />
      </section>
    </div>
  );
};
