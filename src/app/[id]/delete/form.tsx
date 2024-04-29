"use client";
import { deletePokemon } from "@/app/[id]/delete/action";
import PokemonListItem from "@/app/pokemon-list-item";
import { Pokemon } from "@/app/types";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TrashIcon } from "lucide-react";
import { useFormState, useFormStatus } from "react-dom";
import { z } from "zod";

const initialState: {
  errors: z.ZodIssue[] | undefined;
} = {
  errors: undefined,
};

type Props = {
  pokemon: Pokemon;
};

const DeleteButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" aria-disabled={pending}>
      {pending ? "Pending" : "Delete"}
    </Button>
  );
};

const DeleteForm = ({ pokemon }: Props) => {
  const [state, formAction] = useFormState(deletePokemon, initialState);

  return (
    <form action={formAction}>
      <Card className={"w-[380px] m-4"}>
        <CardHeader>
          <CardTitle>Delete {pokemon.name}?</CardTitle>
          <CardDescription>
            Are you sure you want to delete {pokemon.name}? This action cannot
            be undone.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid divide-y">
          <PokemonListItem pokemon={pokemon} hasActions={false} />
        </CardContent>
        <CardFooter>
          <Button className="w-full" variant={"destructive"}>
            <TrashIcon className="mr-2 h-4 w-4" /> Delete
          </Button>
        </CardFooter>
      </Card>
      <input type="hidden" name="id" value={pokemon.id} />
    </form>
  );
};

export default DeleteForm;
