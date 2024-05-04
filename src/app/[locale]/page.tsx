import Pokemons from "@/app/[locale]/pokemons";
import initTranslations from "@/app/i18n";
import { db, pokemons } from "@/lib/db";

type Props = {
  params: {
    locale: string;
  };
};

const i18nNamespaces = ["pokemons"];

const page = async ({ params: { locale } }: Props) => {
  const data = await db.select().from(pokemons);
  const { t } = await initTranslations(locale, i18nNamespaces);
  return <Pokemons t={t} pokemons={data} />;
};

export default page;
