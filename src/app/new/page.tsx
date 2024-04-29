"use client";
import { newPokemon } from "@/app/new/action";
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
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";

const initialState = null;

const CreateButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" aria-disabled={pending}>
      {pending ? "Pending" : "Save"}
    </Button>
  );
};

export const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  type: z.string().min(3, "Please select a type"),
});

const NewPokemon = () => {
  const [state, formAction] = useFormState(newPokemon, initialState);
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      type: "",
    },
  });
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(formAction)} className="space-y-8">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Create pokemon</CardTitle>
            <CardDescription>
              Fill the form to create a new pokemon.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pokemon name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter a new pokemon" {...field} />
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
                    <FormLabel>Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="fire">Fire</SelectItem>
                        <SelectItem value="water">Water</SelectItem>
                        <SelectItem value="grass">Grass</SelectItem>
                        <SelectItem value="electric">Electric</SelectItem>
                        <SelectItem value="psychic">Psychic</SelectItem>
                        <SelectItem value="ice">Ice</SelectItem>
                        <SelectItem value="dragon">Dragon</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="fairy">Fairy</SelectItem>
                        <SelectItem value="fighting">Fighting</SelectItem>
                        <SelectItem value="flying">Flying</SelectItem>
                        <SelectItem value="poison">Poison</SelectItem>
                        <SelectItem value="ground">Ground</SelectItem>
                        <SelectItem value="rock">Rock</SelectItem>
                        <SelectItem value="bug">Bug</SelectItem>
                        <SelectItem value="ghost">Ghost</SelectItem>
                        <SelectItem value="steel">Steel</SelectItem>
                        <SelectItem value="normal">Normal</SelectItem>
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
              <Button variant="outline">Cancel</Button>
            </Link>
            <CreateButton />
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default NewPokemon;
