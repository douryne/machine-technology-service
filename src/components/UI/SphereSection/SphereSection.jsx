import React from 'react';
import './SphereSection.css';
import { SphereCard } from './SphereCard/SphereCard';
import energo from '../../../assets/img/spheres/1.png';
import svyaz from '../../../assets/img/spheres/2.png';
import roadBuilding from '../../../assets/img/spheres/3.png';
import building from '../../../assets/img/spheres/4.png';
import industrial from '../../../assets/img/spheres/5.png';
import cityInfro from '../../../assets/img/spheres/6.png';

export const SphereSection = () => {
  return (
    <section className='sphereSection'>
      <h2 className='sphereSection__title'>Производство металлоконструкций для</h2>
      <ul className='sphereSection__cards-container'>
        <li className='sphereSection__card'>
          <SphereCard
            cardUrl={energo}
            cardTitle='ЭНЕРГЕТИКИ'
            cardText='
                Опоры ЛЭП; соединительные элементы и подвесная арматура для проводов; трансформаторные будки...'
            cardRoute='/'
          />
        </li>
        <li className='sphereSection__card'>
          <SphereCard
            cardUrl={svyaz}
            cardTitle='СВЯЗИ'
            cardText='Радиомачты сотовой и радиосвязи; антенны; ретрансляторы для телефонной связи; зажимы...'
            cardRoute='/'
          />
        </li>
        <li className='sphereSection__card'>
          <SphereCard
            cardUrl={roadBuilding}
            cardTitle='ДОРОЖНОГО СТРОИТЕЛЬСТВА'
            cardText='Опорные, перильные и шумопоглощающие ограждения; пролетные конструкции мостов...'
            cardRoute='/'
          />
        </li>
        <li className='sphereSection__card'>
          <SphereCard
            cardUrl={building}
            cardTitle='СТРОИТЕЛЬСТВА'
            cardText='Каркасы систем зданий; стальная крупнощитовая опалубка; фасадные панели; рельсы...'
            cardRoute='/'
          />
        </li>
        <li className='sphereSection__card'>
          <SphereCard
            cardUrl={industrial}
            cardTitle='ПРОМЫШЛЕННОСТИ'
            cardText='Детали для сельского хозяйства и животноводства, целлюлозной промышленности; cклады...'
            cardRoute='/'
          />
        </li>
        <li className='sphereSection__card'>
          <SphereCard
            cardUrl={cityInfro}
            cardTitle='ГОРОДСКОЙ ИНФРАСТРУКТУРЫ'
            cardText='Тумбы; мосты; флагштоки; элементы рекламных конструкций; стальные решетки...'
            cardRoute='/'
          />
        </li>
      </ul>
    </section>
  );
};
