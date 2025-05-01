// app/page.tsx
"use client";

import { useEffect, useState } from "react";

type Pokemon = {
  name: string;
  url: string;
};

export default function HomePage() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) => res.json())
      .then((data) => setPokemons(data.results));
  }, []);

  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-4">Pokédex</h1>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {pokemons.map((pokemon, index) => (
          <li
            key={pokemon.name}
            className="bg-gray-100 p-4 rounded shadow hover:shadow-md transition"
          >
            <p className="font-semibold capitalize">{pokemon.name}</p>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
              alt={pokemon.name}
              className="w-20 h-20 mx-auto"
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
