"use client";
import { createPokemon } from "@/app/pokemons/add/action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFormState, useFormStatus } from "react-dom";
import { z } from "zod";

const initialState: { errors: z.ZodIssue[] | undefined } = {
  errors: undefined,
};

const CreateButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" aria-disabled={pending}>
      {pending ? "Pending" : "Submit"}
    </Button>
  );
};

const CreatePokemonForm = () => {
  const [state, formAction] = useFormState(createPokemon, initialState);
  return (
    <form action={formAction}>
      <Input type="text" name="name" className="w-80" />
      <CreateButton />
    </form>
  );
};

export default CreatePokemonForm;
