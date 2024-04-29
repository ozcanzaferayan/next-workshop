"use client";
import { createPokemon } from "@/app/pokemons/action";
import { Input } from "@/components/ui/input";
import { useFormState } from "react-dom";

const initialState = {
  message: "",
};

const Pokemons = () => {
  const [state, formAction] = useFormState(createPokemon, initialState);
  console.log(state);
  return (
    <form action={formAction}>
      <Input type="text" name="username" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Pokemons;
