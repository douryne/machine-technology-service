import React from 'react';
import './SphereSection.css';
import { SphereCard } from './SphereCard/SphereCard';
import { sphereData } from '../../../utils/spheresData';

export const SphereSection = () => {
  const cards = sphereData;

  return (
    <section className='sphereSection'>
      <h2 className='sphereSection__title'>Производство металлоконструкций для</h2>
      <ul className='sphereSection__cards-container'>
        {cards.map((card) => {
          return (
            <li key={card.title} className='sphereSection__card'>
              <SphereCard cardUrl={card.image} cardTitle={card.title} cardText={card.text} cardRoute={card.route} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
