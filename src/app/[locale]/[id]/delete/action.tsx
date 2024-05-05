"use server";
import { db } from "@/db";
import { pokemons } from "@/db/schema/pokemons";
import { eq } from "drizzle-orm";
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

  await db.delete(pokemons).where(eq(pokemons.id, parseInt(pokemon.id)));

  revalidatePath("/", "layout");
  redirect("/");
}
