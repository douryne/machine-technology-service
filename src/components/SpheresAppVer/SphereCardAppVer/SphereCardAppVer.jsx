import React from 'react';

import classes from './SphereCardAppVer.module.css';

export const SphereCardAppVer = ({ cardUrl, cardTitle, cardText }) => {
  return (
    <article className={classes.sphereCard}>
      <img src={cardUrl} alt={cardTitle} className={classes.sphereCard__image} />
      <div>
        <h3 className={classes.sphereCard__title}>{cardTitle}</h3>
        <p className={classes.sphereCard__text}>{cardText}</p>
      </div>
    </article>
  );
};
