import { getPokemons } from "@/app/loaders";
import Pokemons from "@/app/pokemons";

const page = async () => {
  const pokemons = await getPokemons();
  return <Pokemons pokemons={pokemons} />;
};

export default page;
