import PokemonListItem from "@/app/[locale]/pokemon-list-item";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Pokemon } from "@/db/schema/pokemons";
import { cn } from "@/lib/utils";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  t: (key: string, values?: Record<string, string | number>) => string;
  pokemons: Pokemon[];
};

const Pokemons = ({ pokemons, t }: Props) => {
  return (
    <Card className={cn("w-[380px] m-4")}>
      <CardHeader>
        <CardTitle>{t("card.title")}</CardTitle>
        <CardDescription>
          {t("card.description", { count: pokemons.length })}
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
            <PlusIcon className="mr-2 h-4 w-4" /> {t("button.add_new")}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Pokemons;
