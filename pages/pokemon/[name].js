// /pages/pokemon/[name].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function PokemonDetail() {
  const router = useRouter();
  const { name } = router.query;
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    if (name) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((res) => {
          const data = res.data;
          setPokemon({
            name: data.name,
            id: data.id,
            image: data.sprites.other['official-artwork'].front_default || data.sprites.front_default,
            height: data.height,
            weight: data.weight,
            types: data.types.map(t => t.type.name),
            abilities: data.abilities.map(a => a.ability.name),
            stats: data.stats.map(s => ({
              name: s.stat.name,
              base: s.base_stat
            })),
            baseExperience: data.base_experience,
            forms: data.forms.map(f => f.name),
            moves: data.moves.map(m => m.move.name),
          });
        })
        .catch((err) => console.error('Erro ao buscar Pokémon:', err));
    }
  }, [name]);

  if (!pokemon) return <p style={{ textAlign: 'center' }}>Carregando...</p>;

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      padding: '2rem',
      backgroundColor: '#f8f8f8',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        backgroundColor: '#fff',
        border: '5px solid #FFD700',
        borderRadius: '16px',
        padding: '2rem',
        maxWidth: '500px',
        width: '100%',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
      }}>
        <h1 style={{
          textAlign: 'center',
          textTransform: 'capitalize',
          color: '#e3350d',
          marginBottom: '1rem'
        }}>
          {pokemon.name} (#{pokemon.id})
        </h1>

        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <img src={pokemon.image} alt={pokemon.name} style={{ width: '200px' }} />
        </div>

        <p><strong>Altura:</strong> {(pokemon.height / 10).toFixed(1)} m</p>
        <p><strong>Peso:</strong> {(pokemon.weight / 10).toFixed(1)} kg</p>
        <p><strong>Experiência Base:</strong> {pokemon.baseExperience}</p>
        <p><strong>Tipos:</strong> {pokemon.types.join(', ')}</p>
        <p><strong>Habilidades:</strong> {pokemon.abilities.join(', ')}</p>

        <div style={{ marginTop: '1rem' }}>
          <h3 style={{ borderBottom: '1px solid #ccc' }}>Estatísticas</h3>
          <ul style={{ paddingLeft: '1rem', listStyleType: 'none' }}>
  {pokemon.stats.map((s, i) => (
    <li key={i}><strong>{s.name}:</strong> {s.base}</li>
  ))}
</ul>

        </div>

        <div style={{ marginTop: '1rem' }}>
          <h3 style={{ borderBottom: '1px solid #ccc' }}>Formas</h3>
          <p>{pokemon.forms.join(', ')}</p>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <h3 style={{ borderBottom: '1px solid #ccc' }}>Movimentos (10 primeiros)</h3>
         <ul style={{ paddingLeft: '1rem', listStyleType: 'none' }}>
  {pokemon.moves.slice(0, 10).map((m, i) => (
    <li key={i}>{m}</li>
  ))}
</ul>

        </div>
      </div>
    </div>
  );
}
