import React from 'react';
import { Panel, PanelGroup } from 'rsuite';
import { useAnimations } from '../../hooks/useAnimations';
import { aboutProjectInfo } from '../../utils/aboutProjectInfo';
import { BlueTitle, Title } from '..';

import 'rsuite/dist/rsuite.min.css';
import './AboutProject.css';

export const AboutProject = () => {
  const articles = aboutProjectInfo;

  useAnimations();

  return (
    <section data-aos='fade-up' className='aboutProject'>
      {/* <h2 className='aboutProject__title'>О проекте</h2> */}
      <div className='title'>
        <Title importance='3' titleColor='grey' titleWeight='medium--weight' titleSize='large--size'>
          О проекте
        </Title>
      </div>

      <PanelGroup className='aboutProject__panel-gruop' accordion>
        {articles.length ? (
          articles.map((article) => (
            <div key={article.title} className='aboutProject__list-item'>
              <Panel className='aboutProject__panel' header={article.title} shaded>
                <p className='aboutProject__list-text'>{article.text}</p>
              </Panel>
            </div>
          ))
        ) : (
          <BlueTitle importance={1}>Что-то пошло не так</BlueTitle>
        )}
      </PanelGroup>
    </section>
  );
};
