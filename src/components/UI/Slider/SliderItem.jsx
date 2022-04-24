import React from 'react';
import Slider from 'react-slick';

import './SliderItem.css';

import img1 from '../../../assets/img/slider/1.jpg';
import img2 from '../../../assets/img/slider/2.jpg';
import img3 from '../../../assets/img/slider/3.jpg';
import img4 from '../../../assets/img/slider/4.jpg';
import img5 from '../../../assets/img/slider/5.jpg';
import img6 from '../../../assets/img/slider/6.jpg';

export const SliderItem = () => {
  const sliderImages = [
    { id: 1, image: img1 },
    { id: 2, image: img2 },
    { id: 3, image: img3 },
    { id: 4, image: img4 },
    { id: 5, image: img5 },
    { id: 6, image: img6 },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {sliderImages.map((image) => (
        <div key={image.id}>
          <img src={image.image} alt='' />
        </div>
      ))}
    </Slider>
  );
};
