import React from 'react';
import { sphereData } from '../../utils/spheresData';
import { SphereCardAppVer } from './SphereCardAppVer/SphereCardAppVer';

import classes from './SpheresAppVer.module.css';

export const SpheresAppVer = () => {
  return (
    <section>
      <ul className={classes.List}>
        {sphereData.map((card) => {
          return (
            <li key={card.title}>
              <SphereCardAppVer cardUrl={card.image} cardTitle={card.title} cardText={card.fullText} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
