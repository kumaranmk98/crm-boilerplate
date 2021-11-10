import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

import { appMarketingTheme } from '../theme';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <meta name="theme-color" content={appMarketingTheme.main} />
          <link
            rel="manifest"
            href="/manifest.json"
            crossOrigin="use-credentials"
          />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="Unacademy" />
          <meta name="apple-mobile-web-app-title" content="Unacademy" />
          <link rel="apple-touch-icon" href="/static/icons/icon-192x192.png" />
          <meta name="msapplication-starturl" content="/" />
        </Head>
        <body>
          <noscript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
