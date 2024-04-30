import NewPokemonForm from "@/app/[locale]/new/form";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";

type Props = {
  params: {
    locale: string;
  };
};

const i18nNamespaces = ["new"];

const page = async ({ params: { locale } }: Props) => {
  const { resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <NewPokemonForm />
    </TranslationsProvider>
  );
};

export default page;
