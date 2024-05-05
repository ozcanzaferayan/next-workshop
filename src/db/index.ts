let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
const sql = neon(
  `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`
);
const db = drizzle(sql);

export { db };
