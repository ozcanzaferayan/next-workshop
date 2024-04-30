"use client";
import { signInAction } from "@/app/[locale]/signIn/action";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";

const LoginButton = () => {
  const { t } = useTranslation();
  const { pending } = useFormStatus();

  return (
    <Button type="submit" aria-disabled={pending}>
      {pending ? "Pending" : t("loginForm.buttons.signIn")}
    </Button>
  );
};

const SignInForm = () => {
  const { t } = useTranslation();
  const schema = z.object({
    email: z.string().email(t("loginForm.errors.email")),
    password: z
      .string()
      .min(8, t("loginForm.errors.password_length", { min: 8 })),
  });

  const [state, formAction] = useFormState(signInAction, null);
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "olivier@mail.com",
      password: "bestPassw0rd",
    },
  });
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(formAction)} className="p-4">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>{t("loginForm.title")}</CardTitle>
            <CardDescription>{t("loginForm.description")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("loginForm.labels.email")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("loginForm.placeholders.email")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("loginForm.labels.password")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("loginForm.placeholders.password")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href="/" className="w-full">
              <Button variant="outline">{t("loginForm.buttons.cancel")}</Button>
            </Link>
            <LoginButton />
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default SignInForm;
