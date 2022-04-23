import React from 'react';
import { Panel, Title } from '../../components';

import './MainPortfolio.css';

export const MainPortfolio = () => {
  const panelName = [
    { id: 1, name: '"AKFA". НАМАНГАН' },
    { id: 2, name: 'ЗАВОД "KNAUF" В ФЕРГАНЕ' },
    { id: 3, name: 'АНГРЕН. БУНКЕР ДЛЯ МОЮЩИХ СТРЕДСТВ' },
    { id: 4, name: 'VEKTAN CHEMICAL' },
    { id: 5, name: 'IES "Uzbekgidroqurilish" В ФЕРГАНЕ' },
    { id: 6, name: 'ТУРКЕСТАНСКИЙ АЭРОПОРТ "YDA" В КАЗАХСТАНЕ' },
    { id: 7, name: 'CП ООО "HIGN LAND CITY"(AKFA GROUP)' },
    { id: 8, name: 'ООО "GREEN LINE PROFIL" (BENKAM)' },
    { id: 9, name: 'ИП OOO "METAL INVENT"(ORIENT GROUP)' },
    { id: 10, name: 'СП ООО "STARGATE SYSTEMS"(AKFA GROUP)' },
    { id: 12, name: 'АО "UZBEKGIDROENERGOQURILISH"' },
    { id: 13, name: 'КОМПАНИЯ-ЗАКАЗЧИК "SOFYA STROY". ЁМКОСТИ ДЛЯ КОМПАНИИ "ЛУКОЙЛ"' },
    { id: 14, name: 'АО «NAVOIYAZOT» - ПРОИЗВОДИТЕЛЬ ХИМПРОДУКЦИИ' },
  ];

  return (
    <div>
      <Title>НАШЕ ПОРТФОЛИО</Title>
      <div className='row'>
        <div className='col-md-12'>
          <div className='container'>
            <div className='panel-group wow fadeInUp animated'>
              {panelName.map((name) => (
                <Panel>{name.name}</Panel>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
