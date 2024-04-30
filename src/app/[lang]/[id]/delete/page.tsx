import DeleteForm from "@/app/[lang]/[id]/delete/form";
import { getPokemon } from "@/app/[lang]/loaders";

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
