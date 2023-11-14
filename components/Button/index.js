import React from 'react';
import { StyledButton } from './styled';

const Button = ({ theme, onClick, children }) => {
  return (
    <StyledButton theme={theme} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;