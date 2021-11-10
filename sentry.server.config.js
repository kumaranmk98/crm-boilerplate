// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

const sentryOptions = {
  dsn: SENTRY_DSN,
  enabled: process.env.NODE_ENV === 'production',
  maxBreadcrumbs: 50,
  attachStacktrace: true,
  environment: process.env.NODE_ENV,
  integrations: [],
  tracesSampleRate: 1.0
};
Sentry.init(sentryOptions);
Sentry.configureScope((scope) => {
  if (typeof navigator === 'object' && navigator?.connection) {
    scope.setTag('network speed', `${navigator?.connection?.downlink}mbps`);
    scope.setTag('network type', navigator?.connection?.effectiveType);
  }
});
