"use server";
import { API_URL } from "@/app/pokemons/loaders";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function createPokemon(prevState: any, formData: FormData) {
  const schema = z.object({
    name: z.string().min(3, {
      message: "Name must be at least 3 characters",
    }),
  });

  const parse = schema.safeParse({
    name: formData.get("name"),
  });

  if (!parse.success) {
    return { errors: parse.error.errors };
  }

  await fetch(`${API_URL}/pokemons`, {
    method: "POST",
    body: JSON.stringify({
      name: parse.data.name,
    }),
  });

  revalidatePath("/pokemons");
  redirect("/pokemons");
}
