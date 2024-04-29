import EditForm from "@/app/[id]/edit/form";
import { Props } from "@/app/[id]/page";
import { getPokemon } from "@/app/loaders";

const Edit = async ({ params: { id } }: Props) => {
  const pokemon = await getPokemon(id);
  return <EditForm pokemon={pokemon} />;
};

export default Edit;
