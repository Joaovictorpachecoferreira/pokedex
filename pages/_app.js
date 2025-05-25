import '../styles/globals.css';
import { useState } from 'react';
import PokemonsContext from '../context/PokemonsContext';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const [pokemons, setPokemons] = useState([]);

  return (
    <>
      <Head>
        <title>PokéCatálogo</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </Head>

      <PokemonsContext.Provider value={{ pokemons, setPokemons }}>
        <Component {...pageProps} />
      </PokemonsContext.Provider>
    </>
  );
}

export default MyApp;
