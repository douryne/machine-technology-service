import React from 'react';
import './ProfEquipment.css';
import { Link } from 'react-router-dom';
import { BlueTitle } from '..';
import { equipmentList } from '../../utils/equipmentList';

export const ProfEquipment = () => {
  const texts = equipmentList;
  return (
    <section className='equipment'>
      <div className='equipment__video-container'>
        <iframe
          className='equipment__video-frame'
          src='https://www.youtube.com/embed/1TmH2VlmfwU'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </div>
      <div className='equipment__list-container'>
        <h2 className='equipment__list-title'>ПРОФЕССИОНАЛЬНОЕ ОБОРУДОВАНИЕ</h2>
        <hr className='equipment__list-line' />
        <ul className='equipment__list'>
          {texts.length ? (
            texts.map((text) => (
              <li key={text} className='equipment__list-item'>
                {text}
              </li>
            ))
          ) : (
            <BlueTitle importance={1}>Что-то пошло не так</BlueTitle>
          )}
        </ul>
        <hr className='equipment__list-line' />
        <Link to='/' className='equipment__list-button'>
          Подробнее
        </Link>
      </div>
    </section>
  );
};
