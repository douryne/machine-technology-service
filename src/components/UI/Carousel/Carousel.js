/* eslint-disable prettier/prettier */
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';
import { Carousel } from 'react-responsive-carousel';
import { carouselImages } from '../../../utils/carouselImg';

export const CarouselComponent = () => {
  const images = carouselImages;
  return (
    <section className='carousel'>
      <h2 className='carousel__title'>ФОТОГАЛЕРЕЯ. ТЕХНИЧЕСКОЕ ОСНАЩЕНИЕ </h2>
      <div className='carousel__container'>
        <Carousel
          showStatus={false}
          showArrows={false}
          autoPlay
          interval={5000}
          infiniteLoop
          emulateTouch
        >
          {images.map((image) => {
            return <img src={image} alt='someImage' />;
          })}
        </Carousel>
      </div>
    </section>
  );
};
