import React from 'react';
import '../lib/globals.css';
import { StateProvider } from '../state'

const MyApp = ({ Component, pageProps }) => {


  return (
    <StateProvider>
      <Component {...pageProps} />
    </StateProvider>
  );
};

export default MyApp
