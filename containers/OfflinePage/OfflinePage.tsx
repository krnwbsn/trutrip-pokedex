import React from 'react';
import Head from 'next/head';
import { defaultPageTitle } from '@utils/constant';
import Layout from '@components/Layout';
import Information from '@components/Information';

const OfflinePage = () => (
  <>
    <Head>
      <title key="page-title">{defaultPageTitle}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Layout loading={false}>
      <Information message="You are offline, please connect to the internet" />
    </Layout>
  </>
);
export default OfflinePage;
