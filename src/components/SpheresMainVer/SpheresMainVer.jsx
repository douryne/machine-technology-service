import React from 'react';
import './SpheresMainVer.css';
import { SphereCardMainVer } from './SphereCardMainVer/SphereCardMainVer';
import { sphereData } from '../../utils/spheresData';

export const SpheresMainVer = () => {
  const cards = sphereData;

  return (
    <section className='sphereSection'>
      <h2 className='sphereSection__title'>Производство металлоконструкций для</h2>
      <ul className='sphereSection__cards-container'>
        {cards.map((card) => {
          return (
            <li key={card.title} className='sphereSection__card'>
              <SphereCardMainVer
                cardUrl={card.image}
                cardTitle={card.title}
                cardText={card.text}
                cardRoute={card.route}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
