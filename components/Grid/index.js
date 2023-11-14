import React from 'react';
import { StyledGrid } from './styled';

const Grid = ({ theme, children }) => {
  return <StyledGrid theme={theme}>{children}</StyledGrid>;
};

export default Grid;
