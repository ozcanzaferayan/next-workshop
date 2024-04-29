"use client";
import { editPokemon } from "@/app/[id]/edit/action";
import { Pokemon } from "@/app/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

const EditButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" aria-disabled={pending}>
      {pending ? "Pending" : "Save"}
    </Button>
  );
};

const EditForm = ({ pokemon }: Props) => {
  const [state, formAction] = useFormState(editPokemon, initialState);

  return (
    <form action={formAction}>
      <Input
        type="text"
        name="name"
        className="w-80"
        defaultValue={pokemon.name}
      />
      <EditButton />
      <input type="hidden" name="id" value={pokemon.id} />
    </form>
  );
};

export default EditForm;
