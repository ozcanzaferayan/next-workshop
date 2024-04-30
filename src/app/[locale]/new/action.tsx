"use server";
import { API_URL } from "@/app/[locale]/loaders";
import { Pokemon } from "@/app/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function newPokemon(prevState: any, pokemon: Pokemon) {
  console.log("pokemon", pokemon);
  const res = await fetch(`${API_URL}/pokemons`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pokemon),
  });
  const json = await res.json();
  console.log("json", json);

  revalidatePath("/");
  redirect("/");
}
