import React from 'react';
import { StyledImg } from './styled';

const Img = ({ theme, src, alt }) => {
  return <StyledImg theme={theme} src={src} alt={alt} />;
};

export default Img;
