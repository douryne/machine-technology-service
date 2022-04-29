import React from 'react';
import './Preview.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { BlueTitle } from '../..';
import { factoryImg } from '../../../utils/factoryImg';
import { useAnimations } from '../../../hooks/useAnimations';

export const Preview = () => {
  const images = factoryImg;
  useAnimations();
  return (
    <section data-aos='zoom-in' className='preview'>
      <Carousel
        showStatus={false}
        dynamicHeight={false}
        showArrows={false}
        showThumbs={false}
        autoPlay
        interval={4000}
        infiniteLoop
        emulateTouch
      >
        {images.length ? (
          images.map((image) => <img key={image} src={image} alt='someImage' />)
        ) : (
          <BlueTitle importance={1}>Что-то пошло не так</BlueTitle>
        )}
      </Carousel>
    </section>
  );
};