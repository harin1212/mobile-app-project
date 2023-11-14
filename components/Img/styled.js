import { styled } from '@mui/material';

const styles = {
  arrow: {
    width: '13px',
    height: '26px',
  },
};

export const StyledImg = styled('img')(({ theme }) => ({
  ...(styles[theme] || {}),
}));
