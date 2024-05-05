import type { Config } from "drizzle-kit";
import { env } from "./src/env.mjs";

export default {
  schema: "./src/db/schema",
  driver: "pg",
  out: "./src/db/migrations",
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
} satisfies Config;
