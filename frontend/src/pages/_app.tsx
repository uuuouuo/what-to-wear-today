import React from 'react';
import type { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyle from '@/styles/global';
import wrapper from '@/store/configureStore';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <CssBaseline />
      <GlobalStyle />
      <Component {...pageProps} />
    </div>
  );
}

export default wrapper.withRedux(MyApp);
