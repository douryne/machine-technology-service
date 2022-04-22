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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={img1} alt='' />
      </div>
      <div>
        <img src={img2} alt='' />
      </div>
      <div>
        <img src={img3} alt='' />
      </div>
      <div>
        <img src={img4} alt='' />
      </div>
      <div>
        <img src={img5} alt='' />
      </div>
      <div>
        <img src={img6} alt='' />
      </div>
    </Slider>
  );
};
