"use server";
import { API_URL } from "@/app/loaders";
import { Pokemon } from "@/app/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function newPokemon(prevState: any, pokemon: Pokemon) {
  await fetch(`${API_URL}/pokemons`, {
    method: "POST",
    body: JSON.stringify(pokemon),
  });

  revalidatePath("/");
  redirect("/");
}
