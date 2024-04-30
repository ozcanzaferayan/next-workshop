import { getPokemons } from "@/app/[lang]/loaders";
import Pokemons from "@/app/[lang]/pokemons";

type Props = {
  params: {
    lang: string;
  };
};

const page = async ({ params: { lang } }: Props) => {
  const pokemons = await getPokemons();
  return <Pokemons pokemons={pokemons} />;
};

export default page;
