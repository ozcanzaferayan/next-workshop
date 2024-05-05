import { faker } from "@faker-js/faker";
import { neon } from "@neondatabase/serverless";
import * as dotenv from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";
import { Pokemon, pokemons, users } from "./schema";

dotenv.config({ path: "./.env" });

const seed = async () => {
  const sql = neon(process.env.DATABASE_URL as string);
  const db = drizzle(sql);

  const usersData = Array.from({ length: 20 }).map(() => ({
    username: faker.internet.userName(),
    email: faker.internet.email(),
  }));

  const pokemonsData: Pokemon[] = [
    {
      id: 1,
      name: "Bulbasaur",
      type: "grass",
    },
    {
      id: 4,
      name: "Charmander",
      type: "fire",
    },
    {
      id: 7,
      name: "Squirtle",
      type: "water",
    },
  ];

  console.log("Seed start");
  let res = await db.insert(users).values(usersData);
  console.log(`Inserted ${res.rowCount} users`);
  res = await db.insert(pokemons).values(pokemonsData);
  console.log(`Inserted ${res.rowCount} pokemons`);
  console.log("Seed done");
};

seed();
