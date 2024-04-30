"use server";
import { API_URL } from "@/app/[locale]/loaders";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function deletePokemon(prevState: any, formData: FormData) {
  const schema = z.object({
    id: z.string({
      message: "ID is required",
    }),
  });

  const parse = schema.safeParse({
    id: formData.get("id"),
  });

  if (!parse.success) {
    return { errors: parse.error.errors };
  }

  const pokemon = parse.data;

  await fetch(`${API_URL}/pokemons/${pokemon.id}`, {
    method: "DELETE",
  });

  revalidatePath("/");
  redirect("/");
}
