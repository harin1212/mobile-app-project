import { styled } from '@mui/material';
import MuiButton from '@mui/material/Button';

const styles = {
    //예시
    signupBtn: {
      color: '#B87514',
      cursor: 'pointer',
      textDecorationLine: 'underline',
      background: '#fff',
      border: 'none',
    },
    
  };
  
  export const StyledButton = styled(MuiButton)(({ theme }) => ({
    ...(styles[theme] || {}),
  }));