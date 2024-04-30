import SignInForm from "@/app/[locale]/signIn/form";
import initTranslations from "@/app/i18n";
import { auth } from "@/auth";
import TranslationsProvider from "@/components/TranslationsProvider";
import { redirect } from "next/navigation";

type Props = {
  params: {
    locale: string;
  };
};

const i18nNamespaces = ["signIn"];

const SignIn = async ({ params: { locale } }: Props) => {
  const { resources } = await initTranslations(locale, i18nNamespaces);
  const session = await auth();
  if (session) {
    redirect("/");
  }
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <SignInForm />
    </TranslationsProvider>
  );
};
export default SignIn;
