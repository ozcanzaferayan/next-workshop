import { getPokemons } from "@/app/pokemons/loaders";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Pokemons = async () => {
  const data = await getPokemons();
  return (
    <>
      <Button>
        <Link href={"/pokemons/add"}>Add Pokemon</Link>
      </Button>
      <ul>
        {data.map((pokemon) => (
          <li key={pokemon.id}>
            {pokemon.name}
            <Link href={`/pokemons/${pokemon.id}/edit`}> Edit</Link>
            <Link href={`/pokemons/${pokemon.id}/delete`}> Delete</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Pokemons;
