"use client";
import { editPokemon } from "@/app/[locale]/[id]/edit/action";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Pokemon } from "@/lib/db";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";

type Props = {
  pokemon: Pokemon;
};

const EditButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" aria-disabled={pending}>
      {pending ? "Pending" : "Save"}
    </Button>
  );
};

const EditForm = ({ pokemon }: Props) => {
  const { t } = useTranslation();
  const schema = z.object({
    id: z.string(),
    name: z.string().min(3, t("form.errors.name_length", { min: 3 })),
    type: z.string().min(1, t("form.errors.select_type")),
  });

  const [state, formAction] = useFormState(editPokemon, null);
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      id: pokemon.id,
      name: pokemon.name,
      type: pokemon.type,
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
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("form.labels.pokemon_name")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("form.placeholders.enter_pokemon")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("form.labels.type")}</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue
                            placeholder={t("form.placeholders.select_type")}
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Object.entries(
                          t("form.type_options", { returnObjects: true })
                        ).map(([key, value]) => (
                          <SelectItem key={key} value={key}>
                            {value}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
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
            <EditButton />
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default EditForm;
