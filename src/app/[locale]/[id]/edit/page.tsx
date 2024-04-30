import EditForm from "@/app/[locale]/[id]/edit/form";
import { Props } from "@/app/[locale]/[id]/page";
import { getPokemon } from "@/app/[locale]/loaders";

const Edit = async ({ params: { id } }: Props) => {
  const pokemon = await getPokemon(id);
  return <EditForm pokemon={pokemon} />;
};

export default Edit;
