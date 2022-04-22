import './MainPage.css';
import React from 'react';
import { SphereSection } from '../../components/UI/SphereSection/SphereSection';
import { ProfEquipment } from '../../components/UI/ProfEquipment/ProfEquipment';
import { AboutProject } from '../../components/UI/AboutProject/AboutProject';
import { MainSlider } from '../../components/UI/MainSlider/MainSlider';

export const MainPage = () => {
  return (
    <>
      <MainSlider />
      <SphereSection />
      <ProfEquipment />
      <AboutProject />
    </>
  );
};
