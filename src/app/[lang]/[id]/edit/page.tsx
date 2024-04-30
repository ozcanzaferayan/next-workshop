import EditForm from "@/app/[lang]/[id]/edit/form";
import { Props } from "@/app/[lang]/[id]/page";
import { getPokemon } from "@/app/[lang]/loaders";

const Edit = async ({ params: { id } }: Props) => {
  const pokemon = await getPokemon(id);
  return <EditForm pokemon={pokemon} />;
};

export default Edit;
