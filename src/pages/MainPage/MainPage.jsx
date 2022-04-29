import './MainPage.css';
import React from 'react';
import {
  MainSlider,
  SpheresMainVer,
  ProfEquipment,
  CarouselComponent,
  AboutProject,
  ScrollToTopBtn,
} from '../../components';

export const MainPage = () => {
  return (
    <div>
      <MainSlider />
      <SpheresMainVer />
      <ProfEquipment />
      <CarouselComponent />
      <AboutProject />
      <ScrollToTopBtn />
    </div>
  );
};
