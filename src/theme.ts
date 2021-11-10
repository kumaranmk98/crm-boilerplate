import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#0bbd80'
    },
    secondary: {
      main: '#408cf6'
    },
    error: {
      main: red.A400
    }
  }
});

export const appMarketingTheme = {
  main: '#3C4852'
};

export default theme;
