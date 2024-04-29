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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
import { z } from "zod";

const initialState: { errors: z.ZodIssue[] | undefined } = {
  errors: undefined,
};

const CreateButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" aria-disabled={pending}>
      {pending ? "Pending" : "Save"}
    </Button>
  );
};

const NewPokemon = () => {
  const [state, formAction] = useFormState(newPokemon, initialState);
  console.log(state.errors);
  return (
    <form action={formAction}>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create pokemon</CardTitle>
          <CardDescription>
            Fill the form to create a new pokemon.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Pokemon Name</Label>
              <Input id="name" name="name" placeholder="Name of your pokemon" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="type">Type</Label>
              <Select name="type">
                <SelectTrigger id="type">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
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
            </div>
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
  );
};

export default NewPokemon;
