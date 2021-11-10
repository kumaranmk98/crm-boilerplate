const { withSentryConfig } = require('@sentry/nextjs');
const { execSync } = require('child_process');

const nextConfig = {
  reactStrictMode: true
};

const getCommitID = () => {
  const commitId = execSync('git rev-parse HEAD | cut -c 1-8')
    .toString()
    .trim();
  return commitId;
};

const basePath = '';

// Sentry
const APP_COMMIT_ID = getCommitID();
const sentryConfig = {
  ignore: ['node_modules'],
  urlPrefix: `~${basePath}/_next`,
  release: APP_COMMIT_ID,
  stripPrefix: ['webpack-internal:///.', 'webpack://_N_E/'],
  url: process.env.SENTRY_URL,
  authToken: process.env.SENTRY_AUTH_TOKEN,
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  runOnce: true
};

module.exports = () => {
  if (
    process.env.SENTRY_DSN &&
    process.env.SENTRY_ORG &&
    process.env.SENTRY_PROJECT &&
    process.env.SENTRY_AUTH_TOKEN &&
    process.env.NODE_ENV === 'production'
  ) {
    nextConfig = withSentryConfig(nextConfig, sentryConfig);
  }
  return nextConfig;
};
