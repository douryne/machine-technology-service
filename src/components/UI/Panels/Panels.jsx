import React from 'react';
import { PanelGroup } from 'rsuite';
import { BlueTitle, PanelComponent, DescriptionText } from '../..';

import classes from './Panels.module.css';

export const Panels = ({ headings, content }) => {
  return (
    <PanelGroup className={classes.panelGroup} accordion>
      {headings.length ? (
        headings.map((heading) => (
          <div data-aos='fade-right' key={heading.id || heading.title} className={classes.listItem}>
            <PanelComponent title={heading.title}>
              {content || <DescriptionText>{heading.text}</DescriptionText>}
            </PanelComponent>
          </div>
        ))
      ) : (
        <BlueTitle importance={1}>Что-то пошло не так</BlueTitle>
      )}
    </PanelGroup>
  );
};
