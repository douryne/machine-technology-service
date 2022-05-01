import React from 'react';
import { PanelGroup } from 'rsuite';
import { BlueTitle, PanelComponent, DescriptionText } from '../..';

import classes from './Panels.module.css';

export const Panels = ({ content, children }) => {
  return (
    <PanelGroup className={classes.panelGroup} accordion>
      {content.length ? (
        content.map((panel) => (
          <div data-aos='fade-right' key={panel.id || panel.title} className={classes.listItem}>
            <PanelComponent title={panel.title}>
              {children || <DescriptionText>{panel.text}</DescriptionText>}
            </PanelComponent>
          </div>
        ))
      ) : (
        <BlueTitle importance={1}>Что-то пошло не так</BlueTitle>
      )}
    </PanelGroup>
  );
};
