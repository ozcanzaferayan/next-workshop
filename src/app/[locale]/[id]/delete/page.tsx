import DeleteForm from "@/app/[locale]/[id]/delete/form";
import { getPokemon } from "@/app/[locale]/loaders";

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
