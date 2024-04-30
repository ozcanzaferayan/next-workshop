"use server";

import { API_URL } from "@/app/[locale]/loaders";
import { signIn } from "@/auth";
import { redirect } from "next/navigation";

export async function registerAction(prevState: any, user: any) {
  await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  await signIn("credentials", user);

  redirect("/");
}
