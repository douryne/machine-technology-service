import React from 'react';
import './MainSlider.css';
import { SliderItem } from '../Slider/SliderItem';

export const MainSlider = () => {
  return (
    <section className='mainSlider'>
      <div className='mainSlider__overlay' />
      <h2 className='mainSlider__title'>
        <span>Наш завод строит заводы</span>
      </h2>
      <SliderItem />
    </section>
  );
};
