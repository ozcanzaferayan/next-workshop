import DeleteForm from "@/app/pokemons/[id]/delete/form";
import { getPokemon } from "@/app/pokemons/loaders";

export type Props = {
  params: {
    id: string;
  };
};

const DeletePokemon = async ({ params: { id } }: Props) => {
  const pokemon = await getPokemon(id);
  return <DeleteForm pokemon={pokemon} />;
};

export default DeletePokemon;
