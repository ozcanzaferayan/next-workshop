"use server";
import { API_URL } from "@/app/[locale]/loaders";
import { Pokemon } from "@/app/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function newPokemon(prevState: any, pokemon: Pokemon) {
  await fetch(`${API_URL}/pokemons`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pokemon),
  });

  revalidatePath("/");
  redirect("/");
}
