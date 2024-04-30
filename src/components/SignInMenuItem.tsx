"use client";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const SignInMenuItem = () => {
  const { t } = useTranslation();
  return (
    <Link href={"/signIn"}>
      <DropdownMenuItem>{t("user_menu.signIn")}</DropdownMenuItem>
    </Link>
  );
};

export default SignInMenuItem;
