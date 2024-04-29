import DeleteForm from "@/app/[id]/delete/form";
import { getPokemon } from "@/app/loaders";

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
