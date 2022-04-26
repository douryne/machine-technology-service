import React from 'react';
import { sphereData } from '../../utils/spheresData';
import { SphereCardAppVer } from './SphereCardAppVer/SphereCardAppVer';

import classes from './SpheresAppVer.module.css';

export const SpheresAppVer = () => {
  return (
    <section className={classes.List}>
      {sphereData.map((card) => {
        return (
          <SphereCardAppVer key={card.title} cardUrl={card.image} cardTitle={card.title} cardText={card.fullText} />
        );
      })}
    </section>
  );
};
