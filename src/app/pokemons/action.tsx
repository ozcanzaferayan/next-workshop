"use server";
import { z } from "zod";

export async function createPokemon(prevState: any, formData: FormData) {
  const schema = z.object({
    email: z.string({
      invalid_type_error: "Invalid Email",
    }),
  });

  const validatedFields = schema.safeParse({
    email: formData.get("email"),
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    console.log(validatedFields.error.errors);
    return {
      message: "Please enter a valid email",
    };
  }
}
