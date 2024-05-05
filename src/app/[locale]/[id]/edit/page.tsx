import EditForm from "@/app/[locale]/[id]/edit/form";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import { db } from "@/db";
import { pokemons } from "@/db/schema/pokemons";
import { eq } from "drizzle-orm";

type Props = {
  params: {
    id: string;
    locale: string;
  };
};

const i18nNamespaces = ["edit"];

const Edit = async ({ params: { id, locale } }: Props) => {
  const pokemon = (
    await db
      .select()
      .from(pokemons)
      .where(eq(pokemons.id, parseInt(id)))
  )[0];

  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <EditForm pokemon={pokemon} />
    </TranslationsProvider>
  );
};

export default Edit;
