import { getPokemons } from "@/app/loaders";
import PokemonListItem from "@/app/pokemon-list-item";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

const Pokemons = async () => {
  const pokemons = await getPokemons();
  return (
    <Card className={cn("w-[380px]")}>
      <CardHeader>
        <CardTitle>Pokemons</CardTitle>
        <CardDescription>
          You have {pokemons.length} pokemons in Pokedex.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid divide-y">
        {pokemons.map((pokemon) => (
          <PokemonListItem key={pokemon.id} pokemon={pokemon} />
        ))}
      </CardContent>
      <CardFooter>
        <Link href="/new" className="w-full">
          <Button className="w-full">
            <PlusIcon className="mr-2 h-4 w-4" /> Add new
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Pokemons;
