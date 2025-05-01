export async function getAllPokemon(limit = 151) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
    return res.json();
  }
  
  export async function getPokemon(id: string) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return res.json();
  }
  