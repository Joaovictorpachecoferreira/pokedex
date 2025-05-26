import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import PokemonsContext from '../context/PokemonsContext';
import styles from '../styles/NovoPokemon.module.css';

export default function NovoPokemon() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const { pokemons, setPokemons } = useContext(PokemonsContext);
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    if (!imageFile) return alert('Selecione uma imagem.');

    const reader = new FileReader();
    reader.onload = function (event) {
      const imageDataUrl = event.target.result;
      setPokemons([...pokemons, { name, price: parseFloat(price), image: imageDataUrl, custom: true }]);
      router.push('/');
    };
    reader.readAsDataURL(imageFile);
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
          <label className={styles.label}>Imagem:</label>
          <input
            className={styles.input}
            type="file"
            accept="image/*"
            onChange={e => setImageFile(e.target.files[0])}
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
