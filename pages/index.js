import Link from 'next/link';
import { useContext } from 'react';
import PokemonsContext from '../context/PokemonsContext';
import styles from '../styles/Home.module.css';

export default function Home() {
  const { pokemons, vendidos, setVendidos } = useContext(PokemonsContext);

  const venderPokemon = (pokemon) => {
    if (!vendidos.some(v => v.name === pokemon.name)) {
      setVendidos([...vendidos, pokemon]);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>PokéCatálogo</h1>
        <div>
          <Link href="/vendidos">
            <button className={styles.addButton}>💰 Vendidos</button>
          </Link>
          <Link href="/novo-pokemon">
            <button className={styles.addButton}>+ Novo Pokémon</button>
          </Link>
        </div>
      </header>

      {pokemons.length === 0 ? (
        <p>Nenhum Pokémon cadastrado.</p>
      ) : (
        <ul className={styles.pokemonList}>
          {pokemons.map((p, i) => (
            <li key={i} className={styles.card}>
              <Link href={`/pokemon/${p.name}`}>
                <img
                  src={p.image}
                  alt={p.name}
                  className={styles.pokeball}
                  style={{ cursor: 'pointer' }}
                />
              </Link>
              <div className={styles.pokemonName}>{p.name}</div>
              <div className={styles.pokemonPrice}>
                Preço: R$ {p.price.toFixed(2)}
              </div>

              {/* Botão de vender */}
              <button
                className={styles.sellButton}
                onClick={() => venderPokemon(p)}
              >
                {vendidos.some(v => v.name === p.name) ? 'Vendido' : 'Vender'}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
