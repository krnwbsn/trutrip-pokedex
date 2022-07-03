import { createContext } from 'react';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '@utils/apollo';
import Provider from '@context/provider';
import '@styles/globals.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export const AppContext = createContext(null);

const App = ({ Component, pageProps }: AppProps) => (
  <Provider>
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  </Provider>
);

export default App;
