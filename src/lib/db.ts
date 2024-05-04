let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { pgTable, serial, text } from "drizzle-orm/pg-core";
const sql = neon(
  `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`
);
const db = drizzle(sql);

export const pokemons = pgTable("pokemons", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  type: text("type").notNull(),
});

export type Pokemon = typeof pokemons.$inferSelect;

export { db };
