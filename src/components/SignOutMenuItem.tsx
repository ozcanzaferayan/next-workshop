"use client";
import { signOutAction } from "@/app/[locale]/signOut/action";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";

const SignOutMenuItem = () => {
  const { t } = useTranslation();
  return (
    <DropdownMenuItem onClick={() => signOutAction()}>
      {t("user_menu.signOut")}
    </DropdownMenuItem>
  );
};

export default SignOutMenuItem;
