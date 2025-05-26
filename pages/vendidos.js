// /pages/vendidos.js
import { useContext } from 'react';
import PokemonsContext from '../context/PokemonsContext';

export default function Vendidos() {
  const { vendidos } = useContext(PokemonsContext);

  const total = vendidos.reduce((acc, p) => acc + p.price, 0);

  return (
    <div style={{ maxWidth: 800, margin: '2rem auto', padding: '1rem' }}>
      <h1 style={{ color: '#e3350d' }}>Pokémons Vendidos</h1>
      <h2>Total Arrecadado: R$ {total.toFixed(2)}</h2>

      {vendidos.length === 0 ? (
        <p>Nenhum Pokémon vendido ainda.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {vendidos.map((p, i) => (
            <li
              key={i}
              style={{
                border: '2px solid #FFD700',
                borderRadius: '10px',
                margin: '1rem 0',
                padding: '1rem',
                background: '#fff'
              }}
            >
              <img src={p.image} alt={p.name} width={100} />
              <div><strong>{p.name}</strong></div>
              <div>Preço: R$ {p.price.toFixed(2)}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
