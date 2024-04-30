"use server";
import { signIn } from "@/auth";
import { redirect } from "next/navigation";

export async function signInAction(
  prevState: any,
  user: {
    email: string;
    password: string;
  }
) {
  await signIn("credentials", user);

  redirect("/");
}
