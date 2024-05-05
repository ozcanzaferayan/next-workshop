"use server";
import { db } from "@/db";
import { Pokemon, pokemons } from "@/db/schema/pokemons";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function newPokemon(prevState: any, pokemon: Pokemon) {
  // await fetch(`${API_URL}/pokemons`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(pokemon),
  // });

  await db.insert(pokemons).values(pokemon);

  revalidatePath("/", "layout");
  redirect("/");
}
