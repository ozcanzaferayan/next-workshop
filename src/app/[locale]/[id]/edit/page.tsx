import EditForm from "@/app/[locale]/[id]/edit/form";
import { getPokemon } from "@/app/[locale]/loaders";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";

type Props = {
  params: {
    id: string;
    locale: string;
  };
};

const i18nNamespaces = ["edit"];

const Edit = async ({ params: { id, locale } }: Props) => {
  const pokemon = await getPokemon(id);
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
