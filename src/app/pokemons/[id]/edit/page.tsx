import EditForm from "@/app/pokemons/[id]/edit/form";
import { Props } from "@/app/pokemons/[id]/page";
import { getPokemon } from "@/app/pokemons/loaders";

const Edit = async ({ params: { id } }: Props) => {
  const pokemon = await getPokemon(id);
  return <EditForm pokemon={pokemon} />;
};

export default Edit;
