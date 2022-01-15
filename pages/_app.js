import '../styles/globals.css';
import { StateProvider } from '../state'

function MyApp({ Component, pageProps }) {
  return <StateProvider>
    <Component {...pageProps} />
  </StateProvider>
};

export default MyApp
