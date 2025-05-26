// /pokedex-main/pages/novo-pokemon.js
import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import PokemonsContext from '../context/PokemonsContext';
import styles from '../styles/NovoPokemon.module.css';

export default function NovoPokemon() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(''); // Novo estado para a imagem
  const { pokemons, setPokemons } = useContext(PokemonsContext);
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    setPokemons([...pokemons, { name, price: parseFloat(price), image }]); // Adiciona a imagem ao novo pokémon
    router.push('/');
  }

  return (
    <div className={styles.container}>
      <h1>Adicionar Novo Pokémon</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Nome do Pokémon:</label>
          <input
            className={styles.input}
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Preço (R$):</label>
          <input
            className={styles.input}
            type="number"
            step="0.01"
            value={price}
            onChange={e => setPrice(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>URL da Imagem:</label>
          <input
            className={styles.input}
            type="text"
            value={image}
            onChange={e => setImage(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Cadastrar
        </button>
      </form>
    </div>
  );
}
