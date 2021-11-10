/* eslint-disable react/jsx-props-no-spreading */
import { ThemeProvider } from '@mui/material/styles';

import theme from '../theme';
import '../styles/globals.css';

function UNApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default UNApp;
