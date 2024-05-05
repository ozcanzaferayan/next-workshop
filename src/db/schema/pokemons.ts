import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const pokemons = pgTable("pokemons", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  type: text("type").notNull(),
});

export type Pokemon = typeof pokemons.$inferSelect;
