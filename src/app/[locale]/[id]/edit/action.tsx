"use server";
import { db } from "@/db";
import { Pokemon, pokemons } from "@/db/schema/pokemons";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function editPokemon(prevState: any, pokemon: Pokemon) {
  await db.update(pokemons).set(pokemon).where(eq(pokemons.id, pokemon.id));

  revalidatePath("/", "layout");
  redirect("/");
}
