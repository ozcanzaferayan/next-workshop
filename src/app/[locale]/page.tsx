import { getPokemons } from "@/app/[locale]/loaders";
import Pokemons from "@/app/[locale]/pokemons";
import initTranslations from "@/app/i18n";

type Props = {
  params: {
    locale: string;
  };
};

const i18nNamespaces = ["pokemons"];

const page = async ({ params: { locale } }: Props) => {
  const pokemons = await getPokemons();
  const { t } = await initTranslations(locale, i18nNamespaces);
  return <Pokemons t={t} pokemons={pokemons} />;
};

export default page;
