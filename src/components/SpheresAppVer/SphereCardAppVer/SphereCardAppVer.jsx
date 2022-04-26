import React from 'react';
import { BlueHeader } from '../..';

import classes from './SphereCardAppVer.module.css';

export const SphereCardAppVer = ({ cardUrl, cardTitle, cardText }) => {
  return (
    <article className={classes.sphereCard}>
      <img src={cardUrl} alt={cardTitle} className={classes.sphereCard__image} />
      <div className={classes.sphereCard__content}>
        <BlueHeader className={classes.sphereCard__title} importance={4}>
          {cardTitle}
        </BlueHeader>
        <p className={classes.sphereCard__text}>{cardText}</p>
      </div>
    </article>
  );
};
