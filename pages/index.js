// /pokedex-main/pages/index.js
import Link from 'next/link';
import { useContext } from 'react';
import PokemonsContext from '../context/PokemonsContext';
import styles from '../styles/Home.module.css';

export default function Home() {
  const { pokemons } = useContext(PokemonsContext);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>PokéCatálogo</h1>
        <Link href="/novo-pokemon">
          <button className={styles.addButton}>+ Novo Pokémon</button>
        </Link>
      </header>

      {pokemons.length === 0 ? (
        <p>Nenhum Pokémon cadastrado.</p>
      ) : (
        <ul className={styles.pokemonList}>
          {pokemons.map((p, i) => (
            <li key={i} className={styles.card}>
              <img
                src={p.image}
                alt={p.name}
                className={styles.pokeball}
              />
              <div className={styles.pokemonName}>{p.name}</div>
              <div className={styles.pokemonPrice}>
                Preço: R$ {p.price.toFixed(2)}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
