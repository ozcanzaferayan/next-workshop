"use server";
import { API_URL } from "@/app/pokemons/loaders";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function editPokemon(prevState: any, formData: FormData) {
  const schema = z.object({
    id: z.string(),
    name: z.string().min(3, {
      message: "Name must be at least 3 characters",
    }),
  });

  const parse = schema.safeParse({
    id: formData.get("id"),
    name: formData.get("name"),
  });

  if (!parse.success) {
    return { errors: parse.error.errors };
  }

  const pokemon = parse.data;

  await fetch(`${API_URL}/pokemons/${pokemon.id}`, {
    method: "PATCH",
    body: JSON.stringify({
      name: pokemon.name,
    }),
  });

  revalidatePath("/pokemons");
  redirect("/pokemons");
}
