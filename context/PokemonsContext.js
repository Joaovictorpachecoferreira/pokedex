// /pokedex-main/context/PokemonsContext.js
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const PokemonsContext = createContext({
  pokemons: [],
  setPokemons: () => {},
  vendidos: [],
  setVendidos: () => {}
});

export const PokemonsProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [vendidos, setVendidos] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=40');
        const pokemonData = response.data.results.map((pokemon, index) => ({
          name: pokemon.name,
          url: pokemon.url,
          id: index + 1 // Adiciona um ID baseado na posição
        }));

        // Puxar as imagens dos pokémons
        const detailedPokemons = await Promise.all(pokemonData.map(async (pokemon) => {
          const details = await axios.get(pokemon.url);
          return {
            name: pokemon.name,
            image: details.data.sprites.front_default,
            price: Math.random() * 100 // Exemplo de preço aleatório
          };
        }));

        setPokemons(detailedPokemons);
      } catch (error) {
        console.error("Erro ao buscar pokémons:", error);
      }
    };

    fetchPokemons();
  }, []);

  return (
    <PokemonsContext.Provider value={{ pokemons, setPokemons, vendidos, setVendidos }}>
      {children}
    </PokemonsContext.Provider>
  );
};
export default PokemonsContext;