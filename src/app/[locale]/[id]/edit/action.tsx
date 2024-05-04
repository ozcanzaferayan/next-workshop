"use server";
import { API_URL } from "@/app/[locale]/loaders";
import { Pokemon } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function editPokemon(prevState: any, pokemon: Pokemon) {
  await fetch(`${API_URL}/pokemons/${pokemon.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pokemon),
  });

  revalidatePath("/");
  revalidatePath(`/${pokemon.id}/edit`);
  redirect("/");
}
