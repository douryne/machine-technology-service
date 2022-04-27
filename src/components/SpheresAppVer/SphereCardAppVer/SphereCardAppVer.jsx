import React from 'react';
import { BlueTitle, DescriptionText } from '../..';

import classes from './SphereCardAppVer.module.css';

export const SphereCardAppVer = ({ cardUrl, cardTitle, cardText }) => {
  return (
    <article className={classes.sphereCard}>
      <img src={cardUrl} alt={cardTitle} className={classes.sphereCard__image} />
      <div className={classes.sphereCard__content}>
        <BlueTitle className={classes.sphereCard__title} importance={4}>
          {cardTitle}
        </BlueTitle>
        <DescriptionText className={classes.sphereCard__text}>{cardText}</DescriptionText>
      </div>
    </article>
  );
};
