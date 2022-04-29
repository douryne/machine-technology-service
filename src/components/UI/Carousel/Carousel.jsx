import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { carouselImages } from '../../../utils/carouselImg';
import { BlueTitle } from '../..';
import { useAnimations } from '../../../hooks/useAnimations';

import './Carousel.css';

export const CarouselComponent = () => {
  const images = carouselImages;
  useAnimations();

  return (
    <section data-aos='zoom-in' className='carousel-component'>
      <h2 className='carousel__title'>ФОТОГАЛЕРЕЯ. ТЕХНИЧЕСКОЕ ОСНАЩЕНИЕ </h2>
      <div className='carousel__container'>
        <Carousel showStatus={false} showArrows autoPlay interval={5000} infiniteLoop emulateTouch>
          {images.length ? (
            images.map((image) => <img key={image} src={image} alt='someImage' />)
          ) : (
            <BlueTitle importance={1}>Что-то пошло не так</BlueTitle>
          )}
        </Carousel>
      </div>
    </section>
  );
};
