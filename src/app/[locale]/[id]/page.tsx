import PokemonListItem from "@/app/[locale]/pokemon-list-item";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { db } from "@/db";
import { pokemons } from "@/db/schema/pokemons";
import { eq } from "drizzle-orm";

export type Props = {
  params: {
    id: string;
  };
};

const PokemonDetail = async ({ params: { id } }: Props) => {
  const pokemon = (
    await db
      .select()
      .from(pokemons)
      .where(eq(pokemons.id, parseInt(id)))
  )[0];

  return (
    <Card className={"w-[380px] m-4"}>
      <CardHeader>
        <CardTitle>Pokemon Detail</CardTitle>
        <CardDescription>This is the detail of the Pokemon.</CardDescription>
      </CardHeader>
      <CardContent className="grid divide-y">
        <PokemonListItem pokemon={pokemon} />
      </CardContent>
    </Card>
  );
};

export default PokemonDetail;
