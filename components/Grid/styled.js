import { styled, Grid } from '@mui/material';

const styles = {
    //예시
    line: {
      width: "390px",
      height: "3px",
      background: "#FFFDF5;",
      boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    },
  
  };
  
  export const StyledGrid = styled(Grid)(({ theme }) => ({
    ...(styles[theme] || {}),
  }));
  