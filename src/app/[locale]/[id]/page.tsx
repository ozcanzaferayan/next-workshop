import { getPokemon } from "@/app/[locale]/loaders";
import PokemonListItem from "@/app/[locale]/pokemon-list-item";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export type Props = {
  params: {
    id: string;
  };
};

const PokemonDetail = async ({ params: { id } }: Props) => {
  console.log("ID", id);
  const pokemon = await getPokemon(id);
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
