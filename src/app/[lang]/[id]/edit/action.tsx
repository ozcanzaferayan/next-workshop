"use server";
import { API_URL } from "@/app/[lang]/loaders";
import { Pokemon } from "@/app/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function editPokemon(prevState: any, pokemon: Pokemon) {
  await fetch(`${API_URL}/pokemons/${pokemon.id}`, {
    method: "PATCH",
    body: JSON.stringify(pokemon),
  });

  revalidatePath("/");
  revalidatePath(`/${pokemon.id}/edit`);
  redirect("/");
}
