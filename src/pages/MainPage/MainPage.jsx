import './MainPage.css';
import React from 'react';
import { MainSlider, SphereSection, ProfEquipment, CarouselComponent, AboutProject } from '../../components';

export const MainPage = () => {
  return (
    <>
      <MainSlider />
      <SphereSection />
      <ProfEquipment />
      <CarouselComponent />
      <AboutProject />
    </>
  );
};
