import { CircleUser, Menu, Package2 } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import initTranslations from "@/app/i18n";
import { auth } from "@/auth";
import LanguageChanger from "@/components/LanguageChanger";
import SignInMenuItem from "@/components/SignInMenuItem";
import SignOutMenuItem from "@/components/SignOutMenuItem";
import { ThemeToggleButton } from "@/components/ThemeToggleButton";
import TranslationsProvider from "@/components/TranslationsProvider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

type Props = {
  children: React.ReactNode;
  locale: string;
};

const i18nNamespaces = ["main-layout"];

export default async function MainLayout({ children, locale }: Props) {
  const { t, i18n, resources } = await initTranslations(locale, i18nNamespaces);
  const session = await auth();
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <div className="flex min-h-screen w-full flex-col">
        <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
          <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold md:text-base"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">{t("links.acme_inc")}</span>
            </Link>
            <Link
              href="/"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("links.pokemons")}
            </Link>
            <Link
              href="/new"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("links.add")}
            </Link>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">{t("navigation.toggle_menu")}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">{t("links.acme_inc")}</span>
                </Link>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground"
                >
                  {t("links.pokemons")}
                </Link>
                <Link
                  href="/new"
                  className="text-muted-foreground hover:text-foreground"
                >
                  {t("links.add")}
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <LanguageChanger />
            <ThemeToggleButton />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  {session ? (
                    <span>{session.user.email.charAt(0).toUpperCase()}</span>
                  ) : (
                    <CircleUser className="h-5 w-5" />
                  )}
                  <span className="sr-only">
                    {t("navigation.toggle_user_menu")}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                  {t("user_menu.my_account")}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>{t("user_menu.settings")}</DropdownMenuItem>
                <DropdownMenuItem>{t("user_menu.support")}</DropdownMenuItem>
                <DropdownMenuSeparator />
                {session ? <SignOutMenuItem /> : <SignInMenuItem />}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
          {children}
        </main>
      </div>
    </TranslationsProvider>
  );
}
