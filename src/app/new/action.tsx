"use server";
import { API_URL } from "@/app/loaders";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  type: z.string().min(3, "Please select a type"),
});

export async function newPokemon(prevState: any, formData: FormData) {
  console.log(formData.get("name"));
  const validation = schema.safeParse({
    name: formData.get("name"),
    type: formData.get("type"),
  });

  console.log(validation.error);
  if (!validation.success) {
    return { errors: validation.error.errors };
  }

  await fetch(`${API_URL}/pokemons`, {
    method: "POST",
    body: JSON.stringify({
      name: validation.data.name,
    }),
  });

  revalidatePath("/pokemons");
  redirect("/pokemons");
}
