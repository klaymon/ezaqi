import React from 'react';
import { useRouter } from 'next/router';

import * as analytics from '../utils/ga4';

export function useAnalytics() {
  const router = useRouter();

  React.useEffect(() => {
    analytics.init();
  }, []);

  React.useEffect(() => {
    analytics.sendPageview(router.asPath);
  }, [router]);
}

export default useAnalytics;
