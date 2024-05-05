import DeleteForm from "@/app/[locale]/[id]/delete/form";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import { db } from "@/db";
import { pokemons } from "@/db/schema/pokemons";
import { eq } from "drizzle-orm";

export type Props = {
  params: {
    id: string;
    locale: string;
  };
};

const i18nNamespaces = ["delete"];

const DeletePokemon = async ({ params: { id, locale } }: Props) => {
  const { resources } = await initTranslations(locale, i18nNamespaces);
  const pokemon = (
    await db
      .select()
      .from(pokemons)
      .where(eq(pokemons.id, parseInt(id)))
  )[0];

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <DeleteForm pokemon={pokemon} />
    </TranslationsProvider>
  );
};

export default DeletePokemon;
