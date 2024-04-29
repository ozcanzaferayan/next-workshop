import { Pokemon } from "@/app/types";
import { Button } from "@/components/ui/button";
import { EditIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  pokemon: Pokemon;
};

const PokemonListItem = ({ pokemon }: Props) => {
  return (
    <div
      key={pokemon.id}
      className="flex items-center justify-between bg-white dark:bg-gray-950 p-4 rounded-lg "
    >
      <div className="flex flex-1 items-center gap-4">
        <div className="">
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
        <div className="grid gap-1 flex-1">
          <h3 className="font-medium">{pokemon.name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
            {pokemon.type} Pokemon
          </p>
        </div>
        <Link href={`/${pokemon.id}/edit`}>
          <Button variant="outline" size="icon">
            <EditIcon className="h-4 w-4" />
          </Button>
        </Link>
        <Link href={`/${pokemon.id}/delete`}>
          <Button variant="outline" size="icon">
            <TrashIcon className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PokemonListItem;
