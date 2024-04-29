import { Pokemon } from "@/app/types";
import Image from "next/image";

type Props = {
  pokemon: Pokemon;
};

const PokemonListItem = ({ pokemon }: Props) => {
  return (
    <div
      key={pokemon.id}
      className="flex items-center justify-between bg-white dark:bg-gray-950 p-4 rounded-lg "
    >
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0">
          <Image
            alt={pokemon.name}
            className="rounded-full"
            height="40"
            src={"/placeholder.svg"}
            style={{
              aspectRatio: "40/40",
              objectFit: "cover",
            }}
            width="40"
          />
        </div>
        <div className="grid gap-1">
          <h3 className="font-medium">{pokemon.name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {pokemon.type} Pokemon
          </p>
        </div>
      </div>
    </div>
  );
};

export default PokemonListItem;
