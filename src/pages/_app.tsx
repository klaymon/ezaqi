import { type AppType } from 'next/dist/shared/lib/utils';
import { useAnalytics } from '../hooks/useAnalytics';
import '~/styles/globals.css';

const MyApp: AppType = ({ Component, pageProps }) => {
  useAnalytics();
  return <Component {...pageProps} />;
};

export default MyApp;
