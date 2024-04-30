"use client";
import { registerAction } from "@/app/[locale]/register/action";
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
      {pending ? "Pending" : t("form.buttons.signIn")}
    </Button>
  );
};

const RegisterForm = () => {
  const { t } = useTranslation();
  const schema = z.object({
    email: z.string().email(t("form.errors.email")),
    password: z.string().min(8, t("form.errors.password_length", { min: 8 })),
  });

  const [state, formAction] = useFormState(registerAction, null);
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "zafer@gmail.com",
      password: "12345678",
    },
  });
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(formAction)} className="p-4">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>{t("form.title")}</CardTitle>
            <CardDescription>{t("form.description")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("form.labels.email")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("form.placeholders.email")}
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
                    <FormLabel>{t("form.labels.password")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("form.placeholders.password")}
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
              <Button variant="outline">{t("form.buttons.cancel")}</Button>
            </Link>
            <LoginButton />
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default RegisterForm;
