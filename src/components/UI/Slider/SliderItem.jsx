import React from 'react';
import Slider from 'react-slick';
import { useAnimations } from '../../../hooks/useAnimations';
import { sliderImages } from '../../../utils/sliderImages';
import { BlueTitle } from '../..';

import './SliderItem.css';

export const SliderItem = () => {
  useAnimations();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider data-aos='zoom-in' {...settings}>
      {sliderImages.length ? (
        sliderImages.map((image) => (
          <div>
            <img src={image} alt='' />
          </div>
        ))
      ) : (
        <BlueTitle importance={1}>Что-то пошло не так</BlueTitle>
      )}
    </Slider>
  );
};
