import React from 'react';
import { BlueTitle } from '..';
import { SphereCardMainVer } from './SphereCardMainVer/SphereCardMainVer';
import { sphereData } from '../../utils/spheresData';

import './SpheresMainVer.css';

export const SpheresMainVer = () => {
  const cards = sphereData;

  return (
    <section className='sphereSection'>
      <h2 className='sphereSection__title'>Производство металлоконструкций для</h2>
      <div className='sphereSection__cards-container'>
        {cards.length ? (
          cards.map((card) => (
            <div className='sphereSection__card'>
              <SphereCardMainVer
                cardUrl={card.image}
                cardTitle={card.title}
                cardText={card.text}
                cardRoute={card.route}
              />
            </div>
          ))
        ) : (
          <BlueTitle importance={1}>Что-то пошло не так</BlueTitle>
        )}
      </div>
    </section>
  );
};
