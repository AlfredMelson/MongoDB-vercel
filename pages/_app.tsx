import '@/styles/globals.css';
import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import Layout from '@/components/layout';

import type { NextPage } from 'next';

import type { Session } from 'next-auth';

export type ExtendedPageProps = {
  requiresAuth?: boolean;
  layout?: React.Component;
};

// extend AppProps with EmotionCache
export type ExtendedAppProps = AppProps & {
  Component: NextPage;
  session: Session | null;
};

export default function MyApp(props: ExtendedAppProps) {
  const { Component, session, pageProps } = props;
  return (
    <SessionProvider session={session}>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
