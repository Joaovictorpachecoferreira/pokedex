// /pokedex-main/pages/_app.js
import '../styles/globals.css';
import Head from 'next/head';
import { PokemonsProvider } from '../context/PokemonsContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>PokéCatálogo</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </Head>

      <PokemonsProvider>
        <Component {...pageProps} />
      </PokemonsProvider>
    </>
  );
}

export default MyApp;
