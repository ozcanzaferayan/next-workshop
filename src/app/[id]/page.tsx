import { getPokemon } from "@/app/loaders";

export type Props = {
  params: {
    id: string;
  };
};

const PokemonDetail = async ({ params: { id } }: Props) => {
  console.log("ID", id);
  const data = await getPokemon(id);
  console.log(data);
  return <>{data.name}</>;
};

export default PokemonDetail;
