import { useContext } from 'react';
import PokemonsContext from '../context/PokemonsContext';
import styles from '../styles/Vendidos.module.css';

export default function Vendidos() {
  const { vendidos } = useContext(PokemonsContext);
  const total = vendidos.reduce((acc, p) => acc + p.price, 0);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Pokémons Vendidos</h1>
      <h2 className={styles.total}>Total Arrecadado: R$ {total.toFixed(2)}</h2>

      {vendidos.length === 0 ? (
        <p className={styles.empty}>Nenhum Pokémon vendido ainda.</p>
      ) : (
        <ul className={styles.list}>
          {vendidos.map((p, i) => (
            <li key={i} className={styles.card}>
              <img src={p.image} alt={p.name} className={styles.image} />
              <div><strong>{p.name}</strong></div>
              <div>Preço: R$ {p.price.toFixed(2)}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
