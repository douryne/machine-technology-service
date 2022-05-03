import React from 'react';
import './Title.css';

const COLORS = ['white', 'grey', 'blue'];

const SIZES = ['small--size', 'medium--size', 'large--size'];

const WEIGHTS = ['normal--weight', 'small--weight', 'medium--weight', 'large--weight', 'bold--weight'];

const CASES = ['normal--case', 'uppercase'];

export const Title = ({ children, importance, titleColor, titleSize, titleWeight, titleCase }) => {
  const FlexTitle = `h${importance < 1 || importance > 6 ? 1 : importance}`;

  const checkTitleColor = COLORS.includes(titleColor) ? titleColor : COLORS[0];

  const checkTitleSize = SIZES.includes(titleSize) ? titleSize : SIZES[0];

  const checkTitleWeight = WEIGHTS.includes(titleWeight) ? titleWeight : SIZES[0];

  const checkTitleCase = CASES.includes(titleCase) ? titleCase : CASES[0];

  return (
    <FlexTitle className={`${checkTitleColor} ${checkTitleSize} ${checkTitleWeight} ${checkTitleCase}`}>
      {children}
    </FlexTitle>
  );
};
