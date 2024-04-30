import { getPokemons } from "@/app/[locale]/loaders";
import Pokemons from "@/app/[locale]/pokemons";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";

type Props = {
  params: {
    locale: string;
  };
};

const i18nNamespaces = ["pokemons"];

const page = async ({ params: { locale } }: Props) => {
  const pokemons = await getPokemons();
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  console.log(resources);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <Pokemons t={t} pokemons={pokemons} />
    </TranslationsProvider>
  );
};

export default page;
