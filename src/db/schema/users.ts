import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username"),
  email: varchar("email", { length: 256 }),
});

export type User = typeof users.$inferSelect;
