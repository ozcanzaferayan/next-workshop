import DeleteForm from "@/app/[locale]/[id]/delete/form";
import { getPokemon } from "@/app/[locale]/loaders";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";

export type Props = {
  params: {
    id: string;
    locale: string;
  };
};

const i18nNamespaces = ["delete"];

const DeletePokemon = async ({ params: { id, locale } }: Props) => {
  const { resources } = await initTranslations(locale, i18nNamespaces);
  const pokemon = await getPokemon(id);

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
