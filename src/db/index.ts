let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
import { env } from "@/env.mjs";
import { neon } from "@neondatabase/serverless";
import { type Logger } from "drizzle-orm/logger";
import { drizzle } from "drizzle-orm/neon-http";

class QueryLogger implements Logger {
  logQuery(query: string, params: unknown[]): void {
    console.debug("___QUERY___");
    console.debug(query);
    console.debug(params);
    console.debug("___END_QUERY___");
  }
}

const sql = neon(env.DATABASE_URL);

const db = drizzle(sql, { logger: new QueryLogger() });

export * from "./schema";

export { db };
