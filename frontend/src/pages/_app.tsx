import type { AppProps } from 'next/app';
import GlobalStyle from '@/styles/global';
import wrapper from '@/store/configureStore';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
export default wrapper.withRedux(MyApp);
