import { getPokemon } from "@/lib/api";

type Props = {
  params: { id: string }
};

export default async function PokemonDetail({ params }: Props) {
  const pokemon = await getPokemon(params.id);

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">{pokemon.name} #{pokemon.id}</h1>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="mx-auto mb-6"
        width={150}
        height={150}
      />
      <p><strong>Altura:</strong> {pokemon.height}</p>
      <p><strong>Peso:</strong> {pokemon.weight}</p>
      <p><strong>Tipos:</strong> {pokemon.types.map((t: any) => t.type.name).join(", ")}</p>
    </main>
  );
}
