import React from 'react';
import { BlueTitle } from '..';
import { sphereData } from '../../utils/spheresData';
import { SphereCardAppVer } from './SphereCardAppVer/SphereCardAppVer';

import classes from './SpheresAppVer.module.css';

export const SpheresAppVer = () => {
  return (
    <section className={classes.List}>
      {sphereData.length ? (
        sphereData.map((card) => (
          <SphereCardAppVer key={card.title} cardUrl={card.image} cardTitle={card.title} cardText={card.fullText} />
        ))
      ) : (
        <BlueTitle importance={1}>Что-то пошло не так</BlueTitle>
      )}
    </section>
  );
};
