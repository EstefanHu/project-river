import React, { useEffect } from 'react';
import '../styles/globals.css';
import firebase from '../lib/firebase';
import { StateProvider } from '../state'

const MyApp = ({ Component, pageProps }) => {
  

  return (
    <StateProvider>
      <Component {...pageProps} />
    </StateProvider>
  );
};

export default MyApp
