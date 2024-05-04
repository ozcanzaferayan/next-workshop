"use client";
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
import { useTranslation } from "react-i18next";

import { deletePokemon } from "@/app/[locale]/[id]/delete/action";
import PokemonListItem from "@/app/[locale]/pokemon-list-item";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Pokemon } from "@/lib/db";
import { TrashIcon } from "lucide-react";

type Props = {
  pokemon: Pokemon;
};

const DeleteButton = () => {
  const { t } = useTranslation();
  const { pending } = useFormStatus();

  return (
    <Button type="submit" aria-disabled={pending}>
      {pending ? t("form.buttons.pending") : t("form.buttons.delete")}
    </Button>
  );
};

const DeleteForm = ({ pokemon }: Props) => {
  const { t } = useTranslation();
  const [state, formAction] = useFormState(deletePokemon, null);

  return (
    <form action={formAction}>
      <Card className="w-[380px] m-4">
        <CardHeader>
          <CardTitle>
            {t("form.title", { pokemonName: pokemon.name })}
          </CardTitle>
          <CardDescription>
            {t("form.description", { pokemonName: pokemon.name })}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <PokemonListItem pokemon={pokemon} hasActions={false} />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/">
            <Button variant="outline">{t("form.buttons.cancel")}</Button>
          </Link>
          <Button variant="destructive">
            <TrashIcon className="mr-2 h-4 w-4" /> {t("form.buttons.delete")}
          </Button>
        </CardFooter>
      </Card>
      <input type="hidden" name="id" value={pokemon.id} />
    </form>
  );
};

export default DeleteForm;
