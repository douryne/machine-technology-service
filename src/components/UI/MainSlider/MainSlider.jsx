import React from 'react';
import './MainSlider.css';
import { SliderItem } from '../Slider/SliderItem';
import { useAnimations } from '../../../hooks/useAnimations';

export const MainSlider = () => {
  useAnimations();
  return (
    <section data-aos='zoom-in' className='mainSlider'>
      <div className='mainSlider__overlay' />
      <h2 className='mainSlider__title'>
        <span>Наш завод строит заводы</span>
      </h2>
      <SliderItem />
    </section>
  );
};
