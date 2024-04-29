"use client";
import { deletePokemon } from "@/app/pokemons/[id]/delete/action";
import { Pokemon } from "@/app/pokemons/types";
import { Button } from "@/components/ui/button";
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
      <h1>Deleting {pokemon.name}. Are you sure?</h1>
      <DeleteButton />
      <input type="hidden" name="id" value={pokemon.id} />
    </form>
  );
};

export default DeleteForm;
