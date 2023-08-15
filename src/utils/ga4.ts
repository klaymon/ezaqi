import ga4 from 'react-ga4';
import { GA_TRACKING_ID, isDevelopment } from '../utils/constants';

export const init = () =>
  ga4.initialize(GA_TRACKING_ID, {
    testMode: isDevelopment,
  });

export const sendEvent = (name: string) =>
  ga4.event('screen_view', {
    app_name: 'myApp',
    screen_name: name,
  });

export const sendPageview = (path: string) =>
  ga4.send({
    hitType: 'pageview',
    page: path,
  });
